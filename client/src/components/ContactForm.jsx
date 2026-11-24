import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Building,
  User,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { submitContact, APP_ENV } from '../services/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Trao đổi cơ hội việc làm IT Helpdesk / Network',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const isUAT = APP_ENV.toUpperCase().includes('UAT');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessResult(null);

    try {
      const response = await submitContact(formData);
      setSuccessResult(response);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'Trao đổi cơ hội việc làm IT Helpdesk / Network',
        message: ''
      });
    } catch (err) {
      setErrorMessage(err.message || 'Không thể gửi tin nhắn. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/80 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            KẾT NỐI & LIÊN HỆ PHỎNG VẤN
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Sẵn sàng đồng hành cùng doanh nghiệp của bạn
          </p>
          <p className="mt-3 text-slate-400 text-sm">
            Quý nhà tuyển dụng có thể để lại lời nhắn trực tiếp hoặc liên hệ qua số điện thoại/email cá nhân
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">Thông tin liên hệ trực tiếp</h3>
                <p className="text-xs text-slate-400 mt-1">Phản hồi nhanh chóng trong vòng 1-2 giờ làm việc</p>
              </div>

              <div className="space-y-4 text-sm">
                <a 
                  href="tel:0342951729" 
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-sky-500 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Điện thoại / Zalo</div>
                    <div className="font-bold text-white text-base">0342 951 729</div>
                  </div>
                </a>

                <a 
                  href="mailto:nhattuan1610@gmail.com" 
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-sky-500 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Hòm thư điện tử</div>
                    <div className="font-bold text-white text-sm sm:text-base truncate">nhattuan1610@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Khu vực sinh sống</div>
                    <div className="font-bold text-white">Quận 8, TP. Hồ Chí Minh</div>
                  </div>
                </div>
              </div>

              {/* Ready to onboard badge */}
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <strong className="block font-semibold">Tình trạng tuyển dụng:</strong>
                  <span>Đã chuẩn bị sẵn sàng hồ sơ và có thể nhận việc (Onboarding) ngay khi đạt thỏa thuận.</span>
                </div>
              </div>
            </div>

            {/* Target DB indicator */}
            <div className={`p-4 rounded-xl border text-xs font-mono flex items-center justify-between ${
              isUAT 
                ? 'bg-amber-950/30 border-amber-500/40 text-amber-300' 
                : 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
            }`}>
              <span>Hệ thống ghi nhận:</span>
              <span className="font-bold uppercase">DATABASE [{APP_ENV}]</span>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-sky-400" />
              <span>Gửi lời nhắn tuyển dụng / Trao đổi phỏng vấn</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Tin nhắn sẽ được gửi trực tiếp tới hệ thống API Backend và lưu vào cơ sở dữ liệu.
            </p>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-rose-950/50 border border-rose-500 text-rose-200 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success Receipt Card */}
            {successResult && (
              <div className="mb-6 p-5 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>{successResult.message}</span>
                </div>
                <div className="font-mono text-[11px] pt-1 text-slate-300">
                  Mã biên nhận (Receipt ID): <strong className="text-white">#{successResult.data?.receiptId}</strong> | Môi trường: <strong className="uppercase">{successResult.environment}</strong>
                </div>
                <p className="text-emerald-300/80 text-[11px]">
                  Cảm ơn Quý công ty! Lê Quang Nhật Tuấn sẽ phản hồi lại qua Email hoặc Số điện thoại trong thời gian sớm nhất.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Họ và Tên người liên hệ <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="VD: Nguyễn Văn A (HR Tech)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Email nhận phản hồi <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="VD: hr@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="VD: 0901234567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Tên Công ty / Doanh nghiệp
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="VD: FPT Telecom / Prudential / VNG"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                  Tiêu đề cuộc trao đổi
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Tiêu đề tin nhắn..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                  Nội dung chi tiết <span className="text-rose-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mô tả tóm tắt vị trí tuyển dụng, địa điểm làm việc hoặc thông tin muốn trao đổi cùng Tuấn..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-xl shadow-sky-600/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Đang truyền dữ liệu tới API Server...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Xác nhận gửi tin nhắn tuyển dụng</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
