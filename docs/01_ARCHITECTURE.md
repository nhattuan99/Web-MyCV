# KIẾN TRÚC HỆ THỐNG DOANH NGHIỆP (ENTERPRISE SYSTEM ARCHITECTURE)
**Dự án:** Web Giới Thiệu CV & Năng Lực Kỹ Thuật — Lê Quang Nhật Tuấn  
**Mục tiêu:** Áp dụng mô hình chuẩn 3-Tier Architecture với cơ chế phân tách môi trường UAT và Production độc lập hoàn toàn.

---

## 1. Mô hình Tổng quan (3-Tier Decoupled Architecture)

```
[ User Browser / Recruiter ]
              │
              ▼
┌──────────────────────────────────────────────┐
│  Tier 1: CLIENT PRESENTATION TIER            │
│  - React 18 + Vite SPA                       │
│  - Tailwind CSS + Lucide Icons               │
│  - Port 3001 (UAT) / Port 3000 (PROD)        │
└──────────────────────┬───────────────────────┘
                       │ HTTP/REST (JSON)
                       ▼
┌──────────────────────────────────────────────┐
│  Tier 2: APPLICATION & API GATEWAY TIER      │
│  - Node.js 24 + Express Enterprise Server    │
│  - Security: Helmet, Rate-Limit, Strict CORS │
│  - Logging: Structured Morgan Logger         │
│  - Endpoints: /api/health, /api/contacts     │
│  - Port 4001 (UAT) / Port 4000 (PROD)        │
└──────────────────────┬───────────────────────┘
                       │ Native Sync SQLite Driver (WAL Mode)
                       ▼
┌──────────────────────────────────────────────┐
│  Tier 3: DATA STORAGE TIER (Biệt Lập)        │
│  - Môi trường UAT:  data/uat/cv_uat.sqlite   │
│  - Môi trường PROD: data/prod/cv_prod.sqlite │
└──────────────────────────────────────────────┘
```

---

## 2. Luồng Xử Lý Dữ Liệu (Data Flow)

1. **Hiển thị hồ sơ:** Khi nhà tuyển dụng mở web, SPA tải các thành phần (Hero, Kinh nghiệm, Ma trận thiết bị Cisco/Fortinet/MikroTik, Mô hình mạng Lab).
2. **Theo dõi tương tác:** Client tự động gửi tín hiệu ẩn `POST /api/analytics/visit` để đếm số lượt xem phân biệt theo từng môi trường.
3. **Tải CV:** Khi click "Tải CV PDF", sự kiện `POST /api/analytics/download-cv` được ghi nhận trước khi mở bản PDF gốc.
4. **Gửi tin nhắn liên hệ:**
   - Client validate dữ liệu (Tên, Email, SĐT, Lời nhắn).
   - Backend kiểm tra Rate Limit (Chống spam tự động).
   - Backend làm sạch dữ liệu và lưu vào database của môi trường tương ứng (UAT hoặc PROD).
   - Trả về mã biên nhận `receiptId` cho người gửi.
