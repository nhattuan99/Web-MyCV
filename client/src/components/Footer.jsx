import React from 'react';
import { Download, ShieldCheck, Heart, Layers, ArrowUp } from 'lucide-react';
import { APP_ENV, APP_VERSION, trackDownload } from '../services/api';

export default function Footer({ onOpenEnvModal }) {
  const isUAT = APP_ENV.toUpperCase().includes('UAT');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = () => {
    trackDownload('PDF');
    const link = document.createElement('a');
    link.href = '/LE_QUANG_NHAT_TUAN_CV.pdf';
    link.download = 'LE_QUANG_NHAT_TUAN_CV.pdf';
    link.click();
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full ring-1 ring-sky-500 object-cover" />
              <div>
                <div className="font-bold text-white text-sm">LÊ QUANG NHẬT TUẤN</div>
                <div className="text-[10px] text-sky-400 font-mono">IT Helpdesk & Network Specialist</div>
              </div>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Website giới thiệu hồ sơ năng lực cá nhân được xây dựng và triển khai theo chuẩn kiến trúc phân tách môi trường UAT & Production của các tập đoàn công nghệ lớn.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="font-mono text-white text-xs font-semibold uppercase mb-3">Điều hướng trang</div>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#about" className="hover:text-sky-400 transition">Giới thiệu & Học vấn STU</a></li>
              <li><a href="#experience" className="hover:text-sky-400 transition">Kinh nghiệm Prudential & UNITEK</a></li>
              <li><a href="#skills" className="hover:text-sky-400 transition">Ma trận Kỹ năng & Thiết bị</a></li>
              <li><a href="#network-lab" className="hover:text-sky-400 transition text-sky-400">Mô hình Mạng Doanh nghiệp</a></li>
              <li><a href="#certifications" className="hover:text-sky-400 transition">Chứng chỉ TG PRO & VNPRO</a></li>
            </ul>
          </div>

          {/* Col 3: DevOps & Architecture */}
          <div>
            <div className="font-mono text-white text-xs font-semibold uppercase mb-3">DevOps & Môi trường</div>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button onClick={onOpenEnvModal} className="hover:text-sky-400 transition text-left flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>Môi trường hiện tại: <strong className={isUAT ? 'text-amber-400' : 'text-emerald-400'}>{APP_ENV}</strong></span>
                </button>
              </li>
              <li>Phiên bản hệ thống: <span className="font-mono text-slate-300">v{APP_VERSION}</span></li>
              <li>Cơ sở dữ liệu: <span className="font-mono text-slate-300">Dual SQLite / PostgreSQL Ready</span></li>
              <li>Chuẩn bảo mật: <span className="font-mono text-emerald-400">OWASP & 12-Factor App</span></li>
            </ul>
          </div>

          {/* Col 4: Quick Actions */}
          <div className="space-y-3">
            <div className="font-mono text-white text-xs font-semibold uppercase mb-3">Tài liệu hồ sơ</div>
            <button
              onClick={handleDownload}
              className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition font-semibold text-xs"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Tải CV Bản Gốc (PDF)</span>
            </button>

            <button
              onClick={scrollToTop}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-slate-400 hover:text-white transition text-xs"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Lên đầu trang</span>
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Lê Quang Nhật Tuấn. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Hệ thống vận hành liên tục 24/7 (High Availability)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
