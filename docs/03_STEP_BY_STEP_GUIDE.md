# HƯỚNG DẪN TỪNG BƯỚC TRIỂN KHAI DỰ ÁN NHƯ MỘT CÔNG TY LỚN

Tài liệu này hướng dẫn chi tiết quy trình chuẩn từ lúc lập trình cục bộ (Local Development) cho đến đóng gói và triển khai lên Production.

---

## Bước 1: Chuẩn Bị Môi Trường Cục Bộ

1. Đảm bảo máy tính đã cài đặt **Node.js (v20 hoặc v24 trở lên)** và **npm**.
2. Kiểm tra phiên bản bằng lệnh:
   ```bash
   node -v
   npm -v
   ```

---

## Bước 2: Khởi Chạy Môi Trường UAT (Kiểm Thử & Review)

Mở cửa sổ dòng lệnh (Terminal / PowerShell) tại thư mục dự án `Web-MyCV`:

```bash
npm run dev:uat
```

Lệnh trên sẽ tự động:
1. Nạp file cấu hình `server/.env.uat` và `client/.env.uat`.
2. Khởi tạo database kiểm thử tại `data/uat/cv_uat.sqlite`.
3. Tự động chạy **Migration** để tạo các bảng: `contacts`, `visitors`, `cv_downloads`.
4. Tự động chạy **Seeder** nạp dữ liệu mẫu (tin nhắn kiểm thử từ HR).
5. Khởi động Backend API tại: `http://localhost:4001`
6. Khởi động Frontend Web tại: `http://localhost:3001`

👉 **Kiểm tra trên trình duyệt:**
- Truy cập `http://localhost:3001`
- Bạn sẽ thấy banner màu vàng cam: **MÔI TRƯỜNG UAT / STAGING (v1.0.0-rc1)**.
- Thử gửi một tin nhắn liên hệ từ form, bạn sẽ thấy tin nhắn được ghi vào database UAT.
- Nhấn vào nút **"ENV: UAT"** trên thanh tiêu đề để mở bảng **Env Inspector**, xem danh sách tin nhắn và thử nút **"Reset UAT Data"**.

---

## Bước 3: Khởi Chạy Môi Trường PRODUCTION (Chính Thức)

Mở một cửa sổ dòng lệnh khác (hoặc sau khi đã nghiệm thu UAT):

```bash
npm run dev:prod
```

Lệnh trên sẽ:
1. Nạp file cấu hình `server/.env.production` và `client/.env.production`.
2. Khởi tạo database chính thức tại `data/prod/cv_prod.sqlite` (hoàn toàn tách biệt với UAT).
3. Khởi động Backend API chính thức tại: `http://localhost:4000`
4. Khởi động Frontend Web chính thức tại: `http://localhost:3000`

👉 **Kiểm tra trên trình duyệt:**
- Truy cập `http://localhost:3000`
- Giao diện sạch sẽ, không có banner cảnh báo test, huy hiệu hiển thị **"ENV: PROD"**.
- Dữ liệu hoàn toàn mới và độc lập với môi trường UAT.

---

## Bước 4: Đóng Gói Production Build (Static Artifacts)

Trước khi đưa lên server thực tế (Nginx/Cloudflare/Vercel/Docker):

```bash
npm run build
```

Các file tối ưu hóa cao (HTML, CSS, JS minified) sẽ được xuất ra thư mục `client/dist/`.

---

## Bước 5: Triển Khai Bằng Docker & Docker Compose (Chuẩn Doanh Nghiệp)

Dự án đã chuẩn bị sẵn 2 file Docker Compose:

### 1. Chạy UAT trong Docker Container:
```bash
docker compose -f deploy/docker/docker-compose.uat.yml up -d --build
```
→ Container chạy Frontend tại port 3001 và Backend tại port 4001.

### 2. Chạy Production trong Docker Container:
```bash
docker compose -f deploy/docker/docker-compose.prod.yml up -d --build
```
→ Container chạy với chính sách khởi động lại tự động (`restart: always`), giới hạn tài nguyên CPU/RAM và lưu trữ database vào Docker Volume `prod_data`.
