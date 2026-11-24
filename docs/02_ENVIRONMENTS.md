# QUY CHUẨN PHÂN TÁCH MÔI TRƯỜNG: UAT VÀ PRODUCTION

Trong các tập đoàn lớn, việc **tách biệt môi trường UAT (User Acceptance Testing / Staging)** và **Production** là tiêu chuẩn bắt buộc nhằm đảm bảo an toàn dữ liệu khách hàng, kiểm thử tính năng mới mà không gây gián đoạn dịch vụ thực tế.

---

## 1. Bảng Ma Trận So Sánh Chi Tiết

| Tiêu chí | Môi trường UAT (Staging) | Môi trường Production (Chính thức) |
| :--- | :--- | :--- |
| **Mục đích** | Kiểm thử chấp nhận, QA review, HR nội bộ duyệt trước | Công khai cho Nhà tuyển dụng thật xem & liên hệ |
| **Branch Git** | `develop` hoặc `release/*` | `main` (có gắn Tag Release `v1.0.0`) |
| **Frontend URL / Port** | `http://localhost:3001` (hoặc `https://uat.mycv.vn`) | `http://localhost:3000` (hoặc `https://mycv.vn`) |
| **Backend API / Port** | `http://localhost:4001/api` | `http://localhost:4000/api` |
| **Database File / Schema** | `data/uat/cv_uat.sqlite` | `data/prod/cv_prod.sqlite` |
| **Dữ liệu mẫu (Seed Data)** | Có sẵn tin nhắn mẫu từ HR & QA để test | Chỉ lưu dữ liệu thật, có log khởi tạo hệ thống |
| **Watermark / UI Indicator**| Có Banner cảnh báo Amber `[UAT ENVIRONMENT]` | Giao diện sạch sẽ 100%, phong cách Enterprise |
| **Công cụ Reset DB** | **BẬT (Enabled)** qua nút `Reset UAT Data` | **TẮT HOÀN TOÀN (Disabled)** |
| **Mức độ Logging** | `DEBUG` (Hiển thị chi tiết lỗi cho Dev/QA) | `INFO / ERROR` (Bảo mật, ẩn stack trace) |
| **Chống Spam Rate Limit** | Nới lỏng (500 req/15 phút để test tải) | Nghiêm ngặt (5 lượt gửi tin/15 phút) |
| **File Cấu Hình** | `server/.env.uat` & `client/.env.uat` | `server/.env.production` & `client/.env.production` |

---

## 2. Vì Sao Cần Phân Tách Database?

1. **Ngăn ngừa mất mát dữ liệu tuyển dụng:** Nếu tester gửi các tin nhắn thử nghiệm ("test 123", "abc") trên cùng một database, dữ liệu sẽ bị ô nhiễm và có nguy cơ tester vô tình bấm lệnh xoá trắng DB làm mất thư mời phỏng vấn thật.
2. **Kiểm thử di chuyển Schema (Migration Test):** Mọi thay đổi về cấu trúc bảng (thêm cột, đổi kiểu dữ liệu) phải được chạy kiểm tra trên database UAT trước. Khi xác nhận ổn định mới áp dụng lên database Production.
3. **Phân quyền truy cập an toàn:** Database UAT có thể cấp quyền mở cho đội ngũ tester kiểm tra; trong khi database Production được mã hóa và bảo vệ bằng khóa quản trị bảo mật cao.
