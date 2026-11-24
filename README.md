# 🚀 HỆ THỐNG WEB CV DOANH NGHIỆP — LÊ QUANG NHẬT TUẤN
> **Kiến trúc chuẩn Enterprise: Tách biệt hoàn toàn Codebase, Database & Cấu hình giữa 2 môi trường UAT và Production.**

---

## 📌 THÔNG TIN ỨNG VIÊN
- **Họ và Tên:** Lê Quang Nhật Tuấn
- **Vị trí chuyên môn:** IT Helpdesk & Service Support | Network Administrator
- **Kinh nghiệm:** 3+ Năm (Prudential Vietnam, UNITEK International, Nhựa Duy Thành)
- **Học vấn:** Đại học Công nghệ Sài Gòn (STU) — Tốt nghiệp Loại Khá, GPA 6.56
- **Chứng chỉ:** TG PRO Network Administrator (09/2025), TG PRO IT Executive (10/2024), VNPRO CCNA (03/2023)
- **Điện thoại:** 0342 951 729 | **Email:** nhattuan1610@gmail.com | **Địa chỉ:** Quận 8, TP.HCM

---

## ⚡ HƯỚNG DẪN KHỞI CHẠY NHANH (QUICK START)

### 1. Khởi chạy Môi trường UAT (Kiểm thử & Review)
```bash
npm run dev:uat
```
- **Web Frontend UAT:** [http://localhost:3001](http://localhost:3001)
- **Backend API UAT:** [http://localhost:4001](http://localhost:4001)
- **Database UAT:** `data/uat/cv_uat.sqlite`
- **Tính năng nổi bật:** Có banner nhận diện UAT, nạp sẵn dữ liệu test mẫu từ HR/QA, mở thanh công cụ `Reset UAT Data`.

---

### 2. Khởi chạy Môi trường PRODUCTION (Chính thức)
```bash
npm run dev:prod
```
- **Web Frontend PROD:** [http://localhost:3000](http://localhost:3000)
- **Backend API PROD:** [http://localhost:4000](http://localhost:4000)
- **Database PROD:** `data/prod/cv_prod.sqlite`
- **Tính năng nổi bật:** Giao diện tinh gọn chuẩn Enterprise, bảo mật khắt khe, lưu trữ hồ sơ và tin nhắn tuyển dụng thực tế.

---

## 📁 CẤU TRÚC DỰ ÁN (PROJECT STRUCTURE)

```
Web-MyCV/
├── client/                     # Frontend SPA (React 18 + Vite + Tailwind CSS + Lucide Icons)
│   ├── public/
│   │   ├── avatar.png          # Ảnh chân dung thực tế trích xuất từ CV
│   │   └── LE_QUANG_NHAT_TUAN_CV.pdf # Bản CV gốc tải về
│   ├── src/
│   │   ├── components/         # Navbar, Hero, About, Experience, Skills, Lab, Contact, EnvModal
│   │   ├── services/api.js     # API Service động theo môi trường
│   │   ├── App.jsx
│   │   └── index.css
│   ├── .env.uat                # Cấu hình Frontend UAT (Port 3001)
│   └── .env.production         # Cấu hình Frontend Production (Port 3000)
│
├── server/                     # Backend API (Node.js 24 + Express + Native SQLite)
│   ├── config/index.js         # Trình nạp biến môi trường động
│   ├── controllers/            # Health, Contacts, Analytics, UAT Test Controller
│   ├── database/
│   │   ├── migrations/         # 001_init.sql (Quản lý phiên bản bảng)
│   │   ├── seeders/            # seed.js (Nạp dữ liệu mẫu UAT)
│   │   └── index.js            # Kết nối DB biệt lập với cơ chế WAL mode
│   ├── middleware/             # Rate Limiter, Error Handler, Logger, Auth
│   ├── routes/api.js           # REST API Endpoints
│   ├── .env.uat                # Cấu hình Backend UAT (Port 4001)
│   └── .env.production         # Cấu hình Backend Production (Port 4000)
│
├── data/                       # Lưu trữ Database riêng biệt
│   ├── uat/cv_uat.sqlite       # Cơ sở dữ liệu UAT
│   └── prod/cv_prod.sqlite     # Cơ sở dữ liệu Production
│
├── deploy/                     # Hồ sơ triển khai Doanh nghiệp
│   ├── docker/                 # Multi-stage Dockerfile & Docker-compose (UAT & PROD)
│   └── nginx/                  # Nginx Reverse Proxy cấu hình SSL & Rate Limit
│
├── .github/workflows/          # CI/CD Pipelines (GitHub Actions)
│   ├── ci-uat.yml              # Tự động build & test khi push develop/release
│   └── cd-production.yml       # Tự động release lên Production khi push main
│
├── docs/                       # Tài liệu Kỹ thuật Chi tiết
│   ├── 01_ARCHITECTURE.md      # Thiết kế kiến trúc 3-Tier
│   ├── 02_ENVIRONMENTS.md      # Quy chuẩn phân tách UAT vs PROD
│   └── 03_STEP_BY_STEP_GUIDE.md# Hướng dẫn từng bước triển khai Big Tech
│
└── package.json                # Root package với các kịch bản chạy một chạm
```

---

## 🎯 CÁC TÍNH NĂNG NỔI BẬT TRÊN WEB

1. **Avatar Thực Tế & Nhận Diện Cá Nhân:** Tự động trích xuất ảnh chân dung sắc nét và hồ sơ gốc của Lê Quang Nhật Tuấn từ PDF.
2. **Kinh Nghiệm Thực Chiến 3+ Năm:** Thể hiện chi tiết vai trò tại Prudential Insurance (Hỗ trợ 1,000+ users, M365, ServiceNow, Remedy, Power Apps) và UNITEK (Hạ tầng mạng Cisco, DrayTek, MikroTik, Fortinet, Sophos).
3. **Mô Hình Lab Mạng Tương Tác (Interactive Network Lab):** Sơ đồ mạng doanh nghiệp đa tầng sinh động, bấm vào từng nút thiết bị để xem đoạn mã cấu hình CLI (Cisco IOS, FortiGate Policy, DrayTek VPN).
4. **Hệ Thống Liên Hệ Lưu Trữ Trực Tiếp:** Form liên hệ tuyển dụng kết nối trực tiếp với Database của môi trường đang chạy và trả về mã biên nhận `receiptId`.
5. **Bảng Thanh Tra Môi Trường (Env Inspector Modal):** Xem trạng thái máy chủ (`/api/health`), thông số bộ nhớ, danh sách tin nhắn trong database và nút Reset dữ liệu cho Tester trong UAT.
