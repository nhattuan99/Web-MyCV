import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Download, 
  Send, 
  ShieldCheck, 
  Activity, 
  CheckCircle,
  Network,
  Server,
  Layers,
  Sparkles
} from 'lucide-react';
import { trackDownload } from '../services/api';

export default function Hero({ onOpenContactModal }) {
  const handleDownload = () => {
    trackDownload('PDF');
    const link = document.createElement('a');
    link.href = '/LE_QUANG_NHAT_TUAN_CV.pdf';
    link.download = 'LE_QUANG_NHAT_TUAN_CV.pdf';
    link.click();
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-b border-slate-800">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-10 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Intro & Bio */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-semibold uppercase">Open to Work • Sẵn sàng tiếp nhận công việc mới</span>
            </div>

            {/* Candidate Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                LÊ QUANG NHẬT TUẤN
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-sky-400 font-mono flex items-center justify-center lg:justify-start gap-2">
                <span>IT HELPDESK & SERVICE SUPPORT</span>
                <span className="text-slate-600">|</span>
                <span className="text-emerald-400">NETWORK ADMINISTRATOR</span>
              </p>
            </div>

            {/* About brief summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Với hơn <strong className="text-white font-semibold">3 năm kinh nghiệm thực chiến</strong> trong lĩnh vực Công Nghệ Thông Tin (IT Support & Network Engineering) tại các doanh nghiệp lớn như <span className="text-sky-300 font-medium">Prudential Insurance Vietnam</span> và <span className="text-sky-300 font-medium">UNITEK</span>. Chuyên sâu về hỗ trợ người dùng doanh nghiệp (M365, ServiceNow, Remedy), vận hành thiết bị mạng (Cisco, DrayTek, MikroTik), bảo mật tường lửa (Fortinet, Sophos) và tự động hóa quy trình với Power Apps.
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300 max-w-lg mx-auto lg:mx-0">
              <a 
                href="tel:0342951729" 
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:border-sky-500/60 hover:bg-slate-800 transition group"
              >
                <div className="w-8 h-8 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Điện thoại / Zalo</div>
                  <div className="font-semibold text-white font-mono">0342 951 729</div>
                </div>
              </a>

              <a 
                href="mailto:nhattuan1610@gmail.com" 
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:border-sky-500/60 hover:bg-slate-800 transition group"
              >
                <div className="w-8 h-8 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Email liên hệ</div>
                  <div className="font-semibold text-white truncate font-mono text-xs sm:text-sm">nhattuan1610@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <div className="w-8 h-8 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Địa điểm</div>
                  <div className="font-medium text-white">Quận 8, TP. Hồ Chí Minh</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <div className="w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Năm sinh / Giới tính</div>
                  <div className="font-medium text-white">16/10/1999 • Nam</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-xl shadow-sky-600/30 transition transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Tải CV Bản Đầy Đủ (PDF)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Gửi lời mời phỏng vấn</span>
              </a>

              <a
                href="#network-lab"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-sky-400 text-sm font-medium transition"
              >
                <Network className="w-4 h-4" />
                <span>Xem sơ đồ mạng Lab &rarr;</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-tech Portrait & System Specs */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              {/* Decorative Tech Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative bg-slate-900 border-2 border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                {/* Photo Display */}
                <div className="relative overflow-hidden rounded-xl bg-slate-800 aspect-[3/4] max-w-[280px] sm:max-w-[320px] mx-auto">
                  <img 
                    src="/avatar.png" 
                    alt="Lê Quang Nhật Tuấn - IT Helpdesk Support"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Corner Watermark */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700 text-[11px]">
                      ID: TUAN.LQ
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 text-[11px]">
                      <CheckCircle className="w-3 h-3" />
                      Verified CV
                    </span>
                  </div>
                </div>

                {/* Sub-card Enterprise Metrics */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    <div className="text-slate-400 text-[10px]">Học Vấn (STU)</div>
                    <div className="font-bold text-sky-400 text-sm">GPA 6.56</div>
                    <div className="text-[9px] text-slate-400">Tốt nghiệp Khá</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    <div className="text-slate-400 text-[10px]">Mạng & Hệ Thống</div>
                    <div className="font-bold text-emerald-400 text-sm">CCNA / MCSA</div>
                    <div className="text-[9px] text-slate-400">TG PRO & VNPRO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Metric Counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-sky-500/40 transition">
            <div className="text-3xl font-extrabold text-sky-400 font-mono">3+ Năm</div>
            <div className="text-sm font-medium text-slate-300 mt-1">Kinh nghiệm IT Doanh nghiệp</div>
            <div className="text-xs text-slate-400 mt-1">Prudential & UNITEK Corp</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-emerald-500/40 transition">
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">1,000+</div>
            <div className="text-sm font-medium text-slate-300 mt-1">Users Đã Hỗ Trợ</div>
            <div className="text-xs text-slate-400 mt-1">On-site & Remote Helpdesk</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-purple-500/40 transition">
            <div className="text-3xl font-extrabold text-purple-400 font-mono">20+</div>
            <div className="text-sm font-medium text-slate-300 mt-1">Thiết bị Network & Security</div>
            <div className="text-xs text-slate-400 mt-1">Cisco, Fortinet, Sophos, MikroTik</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-amber-500/40 transition">
            <div className="text-3xl font-extrabold text-amber-400 font-mono">3</div>
            <div className="text-sm font-medium text-slate-300 mt-1">Chứng chỉ Quản trị Chuyên sâu</div>
            <div className="text-xs text-slate-400 mt-1">Network Admin, CCNA, MCSA</div>
          </div>
        </div>

      </div>
    </section>
  );
}
