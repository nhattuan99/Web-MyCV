import React from 'react';
import { 
  GitBranch, 
  Database, 
  Server, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  Activity
} from 'lucide-react';
import { APP_ENV } from '../services/api';

export default function EnterpriseArchitecture({ onOpenEnvModal }) {
  const isUAT = APP_ENV.toUpperCase().includes('UAT');

  return (
    <section id="architecture" className="py-20 bg-slate-950 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/40 text-indigo-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE GRADE DEPLOYMENT ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Kiến Trúc Phân Tách Môi Trường Chuẩn Enterprise (UAT & PROD)
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Quy trình triển khai tiêu chuẩn từ các tập đoàn công nghệ lớn: Phân tách hoàn toàn Codebase, Cấu hình môi trường (.env), Dữ liệu Database và Luồng CI/CD.
          </p>
          <div className="mt-4 h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Comparison Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* UAT ENVIRONMENT CARD */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition duration-200 ${
            isUAT 
              ? 'bg-amber-950/20 border-amber-500 ring-1 ring-amber-500/50 shadow-xl' 
              : 'bg-slate-900 border-slate-800'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/30">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Môi trường UAT / Staging</span>
                    {isUAT && <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500 text-slate-950 font-bold uppercase">Đang Xem</span>}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">User Acceptance Testing & Staging</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-950 text-amber-400 border border-amber-800">
                Port 3001 / 4001
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="font-semibold text-amber-300 font-mono uppercase text-[11px] mb-1">
                  1. Mục đích & Phạm vi sử dụng
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Dành riêng cho QA/Tester, HR nội bộ và Developer kiểm thử toàn diện các tính năng mới, gửi form thử nghiệm mà tuyệt đối <strong>không làm nhiễu dữ liệu thật</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="font-semibold text-amber-300 font-mono uppercase text-[11px] mb-1">
                  2. Phân tách Database UAT
                </div>
                <div className="font-mono text-slate-200 bg-slate-950 p-2 rounded border border-slate-800">
                  DB: data/uat/cv_uat.sqlite (hoặc Postgres schema: cv_portal_uat)
                </div>
                <p className="text-slate-400 mt-1">
                  Được tự động nạp Mock Data (Test Seeders) gồm tin nhắn mẫu từ Recruiter & QA để kiểm thử giao diện quản trị.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="font-semibold text-amber-300 font-mono uppercase text-[11px] mb-1">
                  3. Cấu hình & Giám sát
                </div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Log Level: <code className="text-amber-400">DEBUG</code> (Hiển thị chi tiết lỗi cho Dev/QA)</li>
                  <li>• Rate Limit: Nới lỏng (500 requests/15 phút để test tải)</li>
                  <li>• Debug Toolbar & Reset Data: <span className="text-emerald-400 font-medium">BẬT (Enabled)</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* PRODUCTION ENVIRONMENT CARD */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition duration-200 ${
            !isUAT 
              ? 'bg-emerald-950/20 border-emerald-500 ring-1 ring-emerald-500/50 shadow-xl' 
              : 'bg-slate-900 border-slate-800'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Môi trường PRODUCTION (Live)</span>
                    {!isUAT && <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500 text-slate-950 font-bold uppercase">Đang Xem</span>}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">Official Public Candidate CV Portal</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                Port 3000 / 4000
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="font-semibold text-emerald-300 font-mono uppercase text-[11px] mb-1">
                  1. Mục đích & Phạm vi sử dụng
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Môi trường chạy chính thức trên Internet phục vụ các Nhà tuyển dụng, Doanh nghiệp thật xem hồ sơ và gửi thông báo mời phỏng vấn bảo mật.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="font-semibold text-emerald-300 font-mono uppercase text-[11px] mb-1">
                  2. Phân tách Database Production
                </div>
                <div className="font-mono text-slate-200 bg-slate-950 p-2 rounded border border-slate-800">
                  DB: data/prod/cv_prod.sqlite (hoặc Postgres cluster: cv_portal_prod)
                </div>
                <p className="text-slate-400 mt-1">
                  Hoàn toàn sạch sẽ, lưu trữ an toàn các thông tin liên hệ và lượt truy cập thực tế với mã hóa SHA-256 IP salt.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="font-semibold text-emerald-300 font-mono uppercase text-[11px] mb-1">
                  3. Bảo mật & Hiệu năng tối đa
                </div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Log Level: <code className="text-emerald-400">INFO / ERROR</code> (Không lộ stack trace nhạy cảm)</li>
                  <li>• Rate Limit: Nghiêm ngặt (5 lượt gửi tin nhắn/15 phút chống spam DDoS)</li>
                  <li>• Debug Toolbar & Reset Tools: <span className="text-rose-400 font-medium">TẮT HOÀN TOÀN (Disabled)</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Gitflow & Enterprise Release Workflow Diagram */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-sky-400" />
            <span>Quy chuẩn luồng Gitflow & CI/CD Pipeline của Doanh nghiệp</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
              <div className="text-sky-400 font-bold mb-1">BƯỚC 1: LẬP TRÌNH</div>
              <div className="text-white font-semibold text-sm">feature/cv-ui</div>
              <p className="text-slate-400 font-sans mt-2">
                Developer tạo branch tính năng, chạy test cục bộ và tạo Pull Request (PR) kèm code review.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
              <div className="text-indigo-400 font-bold mb-1">BƯỚC 2: BUILD & INTEGRATION</div>
              <div className="text-white font-semibold text-sm">develop / release</div>
              <p className="text-slate-400 font-sans mt-2">
                GitHub Actions tự động chạy linter, security audit và đóng gói Docker Container.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40">
              <div className="text-amber-400 font-bold mb-1">BƯỚC 3: DEPLOY UAT</div>
              <div className="text-white font-semibold text-sm">uat.mycv.local</div>
              <p className="text-slate-400 font-sans mt-2">
                Deploy tự động lên máy chủ UAT với Database UAT để QA kiểm thử giao diện và quy trình nhận tin nhắn.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-600/40">
              <div className="text-emerald-400 font-bold mb-1">BƯỚC 4: RELEASE PROD</div>
              <div className="text-white font-semibold text-sm">main (Tag v1.0.0)</div>
              <p className="text-slate-400 font-sans mt-2">
                Sau khi QA nghiệm thu (Sign-off), merge vào main và kích hoạt Zero-Downtime Deployment ra Production.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="text-xs text-slate-400">
              Hệ thống hiện tại đang chạy ở chế độ: <strong className={isUAT ? 'text-amber-400' : 'text-emerald-400'}>{APP_ENV}</strong>
            </div>

            <button
              onClick={onOpenEnvModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition shadow-lg shadow-indigo-600/20"
            >
              <Activity className="w-4 h-4" />
              <span>Mở Bảng Điều Khiển Thanh Tra Hệ Thống (Env Inspector)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
