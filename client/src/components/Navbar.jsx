import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Download, 
  Send, 
  Server, 
  Cpu, 
  Menu, 
  X,
  ExternalLink,
  Layers
} from 'lucide-react';
import { APP_ENV, APP_VERSION, trackDownload } from '../services/api';

export default function Navbar({ onOpenEnvModal, onOpenContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isUAT = APP_ENV.toUpperCase().includes('UAT');

  const handleDownloadCV = () => {
    trackDownload('PDF');
    const link = document.createElement('a');
    link.href = '/LE_QUANG_NHAT_TUAN_CV.pdf';
    link.download = 'LE_QUANG_NHAT_TUAN_CV.pdf';
    link.click();
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-900/90 border-b border-slate-800 text-slate-100 transition-all">
      {/* Top Enterprise Environment Notice Banner */}
      {isUAT && (
        <div className="bg-amber-500/15 border-b border-amber-500/30 px-4 py-1.5 text-xs text-amber-300 flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-semibold tracking-wide">MÔI TRƯỜNG UAT / STAGING (v{APP_VERSION})</span>
            <span className="hidden md:inline text-amber-200/80">— Database & API biệt lập để kiểm thử và review tính năng</span>
          </div>
          <button 
            onClick={onOpenEnvModal}
            className="text-[11px] underline hover:text-white font-medium ml-2 shrink-0"
          >
            Chi tiết hệ thống &rarr;
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Identity */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="relative">
                <img 
                  src="/avatar.png" 
                  alt="Lê Quang Nhật Tuấn" 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-500/80 group-hover:ring-sky-400 transition"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full" title="Online / Open to Work"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white group-hover:text-sky-400 transition text-sm sm:text-base">
                  LÊ QUANG NHẬT TUẤN
                </span>
                <span className="text-[11px] font-mono text-sky-400/90 tracking-wide">
                  IT Support & Network Admin
                </span>
              </div>
            </a>

            {/* Environment Badge Pill */}
            <button
              onClick={onOpenEnvModal}
              title="Nhấn để xem thông số kiến trúc & database môi trường"
              className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border transition ${
                isUAT 
                  ? 'bg-amber-950/40 text-amber-300 border-amber-600/40 hover:bg-amber-900/50' 
                  : 'bg-emerald-950/40 text-emerald-300 border-emerald-600/40 hover:bg-emerald-900/50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>ENV: {isUAT ? 'UAT (Port 3001)' : 'PROD (Port 3000)'}</span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-sky-400 transition">Giới thiệu</a>
            <a href="#experience" className="hover:text-sky-400 transition">Kinh nghiệm</a>
            <a href="#skills" className="hover:text-sky-400 transition">Kỹ năng & Thiết bị</a>
            <a href="#network-lab" className="hover:text-sky-400 transition flex items-center gap-1 text-sky-300">
              <Terminal className="w-4 h-4" />
              <span>Mô hình Mạng IT</span>
            </a>
            <a href="#certifications" className="hover:text-sky-400 transition">Chứng chỉ</a>
            <a href="#architecture" className="hover:text-sky-400 transition flex items-center gap-1 text-amber-300">
              <Server className="w-3.5 h-3.5" />
              <span>UAT & Prod Architecture</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Tải CV PDF đính kèm bản chuẩn"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Tải CV PDF</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/25 transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Liên hệ</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={handleDownloadCV}
              className="p-2 rounded-lg bg-slate-800 text-slate-200"
              title="Tải CV"
            >
              <Download className="w-4 h-4 text-sky-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-900/95 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800">Giới thiệu</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800">Kinh nghiệm</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800">Kỹ năng & Thiết bị</a>
            <a href="#network-lab" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800 text-sky-400">Mô hình Mạng IT</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800">Chứng chỉ</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800 text-amber-300">Kiến trúc UAT & Prod</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md bg-sky-600 text-white font-medium text-center">Liên hệ tuyển dụng</a>
          </nav>

          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>Môi trường: <strong className={isUAT ? 'text-amber-400' : 'text-emerald-400'}>{APP_ENV}</strong></span>
            <button onClick={onOpenEnvModal} className="text-sky-400 underline">Bảng kiểm thử</button>
          </div>
        </div>
      )}
    </header>
  );
}
