import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Heart, 
  Lightbulb, 
  Users, 
  Clock, 
  Award,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: Target,
      title: 'Độc lập & Làm việc nhóm',
      desc: 'Chủ động nhận nhiệm vụ, linh hoạt phối hợp cùng các phòng ban kinh doanh và team L2/L3 để xử lý nhanh sự cố.'
    },
    {
      icon: Lightbulb,
      title: 'Tư duy Giải quyết Sự cố (Troubleshooting)',
      desc: 'Phân tích nguyên nhân gốc rễ (Root Cause), tuân thủ đúng quy trình ITIL, tránh lặp lại lỗi người dùng.'
    },
    {
      icon: Clock,
      title: 'Kiên nhẫn & Tận tâm',
      desc: 'Lắng nghe nhu cầu của người dùng, giải thích rõ ràng và hướng dẫn nhân sự thao tác máy tính hiệu quả, bảo mật.'
    },
    {
      icon: Award,
      title: 'Tinh thần Học hỏi Liên tục',
      desc: 'Chủ động cập nhật kiến thức mạng mới, đạt các chứng chỉ CCNA, MCSA và quản trị hệ thống chuyên sâu.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            VỀ BẢN THÂN & HỌC VẤN
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Tận tâm hỗ trợ người dùng, đam mê vận hành hạ tầng mạng
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: About Statement & Goal */}
          <div className="lg:col-span-7 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-4">
                <Target className="w-4 h-4" />
                <span>Mục tiêu nghề nghiệp (Career Objective)</span>
              </div>

              <blockquote className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 border-sky-500 pl-4 py-1 mb-6">
                "Tôi có 3 năm kinh nghiệm trong lĩnh vực Công nghệ Thông tin, đảm nhận vị trí IT Helpdesk / Support. Tôi luôn hướng đến việc đóng góp giá trị cao nhất cho tập thể, nỗ lực hết mình vì công ty và hy vọng tìm kiếm một vị trí gắn bó ổn định, phát triển lâu dài."
              </blockquote>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Với nền tảng kỹ thuật vững vàng từ Đại học STU cùng kinh nghiệm triển khai thiết bị mạng doanh nghiệp (Cisco, HP, Juniper, Fortinet, Sophos), tôi không chỉ hỗ trợ người dùng cuối (End-user Support) nhanh chóng mà còn tự tin đóng góp vào việc quy hoạch hạ tầng mạng nội bộ, giám sát thiết bị và xây dựng quy trình tự động hóa văn phòng.
              </p>
            </div>

            {/* Core Soft Skills Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              {strengths.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                  <div className="flex items-center gap-2 mb-1.5">
                    <item.icon className="w-4 h-4 text-sky-400" />
                    <span className="font-semibold text-white text-xs sm:text-sm">{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education & STU Degree Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* University Degree */}
            <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/90 border border-slate-700/60 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-sky-400 pointer-events-none">
                <GraduationCap className="w-32 h-32" />
              </div>

              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold uppercase mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Học vấn & Bằng cấp Đại học</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                Đại học Công nghệ Sài Gòn (STU)
              </h3>
              <p className="text-sm font-mono text-slate-400 mt-1">
                SAIGON TECHNOLOGY UNIVERSITY
              </p>

              <div className="mt-4 space-y-2.5 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-700/60">
                  <span className="text-slate-400 text-xs">Thời gian đào tạo:</span>
                  <span className="font-mono font-medium text-slate-200">10/2017 - 08/2022 (5 năm)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-700/60">
                  <span className="text-slate-400 text-xs">Xếp loại tốt nghiệp:</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800 text-xs">
                    Loại Khá (Good Grade)
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-700/60">
                  <span className="text-slate-400 text-xs">Điểm trung bình tích lũy:</span>
                  <span className="font-mono font-bold text-sky-400 text-base">GPA 6.56 / 10</span>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Trang bị kiến thức nền tảng vững chắc về Kiến trúc Máy tính, Mạng Máy tính, Hệ điều hành Linux/Windows Server và Cơ sở Dữ liệu.</span>
              </div>
            </div>

            {/* Personal Interests / Hobbies */}
            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs font-semibold uppercase mb-3">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Sở thích cá nhân & Đời sống</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Đọc sách công nghệ', 'Du lịch khám phá', 'Nấu ăn', 'Nghe nhạc', 'Xem phim điện ảnh'].map((hobby, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/70 hover:border-slate-600 transition">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
