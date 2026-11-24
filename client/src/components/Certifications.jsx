import React from 'react';
import { 
  Award, 
  Calendar, 
  CheckCircle, 
  ShieldCheck, 
  BookOpen, 
  ExternalLink 
} from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      id: 'net-admin',
      title: 'TG PRO: NETWORK ADMINISTRATOR',
      issuer: 'Trung Tâm Tin Học TG Pro',
      date: '09/2025',
      status: 'Đã cấp chứng chỉ',
      color: 'border-sky-500/50 bg-sky-950/20',
      badge: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      skills: ['Quy hoạch địa chỉ IP & Subnetting', 'Cấu hình Router & Switch Doanh nghiệp', 'Định tuyến OSPF, VPN IPsec', 'Xử lý sự cố mạng nâng cao']
    },
    {
      id: 'it-executive',
      title: 'TG PRO: IT EXECUTIVE',
      subtitle: '(Helpdesk, CCNA, MCSA)',
      issuer: 'Trung Tâm Tin Học TG Pro',
      date: '10/2024',
      status: 'Đã cấp chứng chỉ',
      color: 'border-emerald-500/50 bg-emerald-950/20',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      skills: ['Quản trị hệ thống Windows Server (MCSA)', 'Active Directory, Group Policy (GPO), DNS/DHCP', 'Quy trình ITIL Helpdesk & Chăm sóc người dùng', 'Cấu hình mạng CCNA cơ bản']
    },
    {
      id: 'ccna',
      title: 'VNPRO: CCNA (Routing & Switching)',
      issuer: 'Trung Tâm Tin Học VnPro (Cisco Academy)',
      date: '03/2023',
      status: 'Đã hoàn thành khóa học chuyên sâu',
      color: 'border-indigo-500/50 bg-indigo-950/20',
      badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      skills: ['Cisco IOS CLI Configuration', 'VLAN, Trunking 802.1Q, Inter-VLAN Routing', 'Giao thức Spanning Tree (STP/RSTP)', 'Bảo mật hạ tầng mạng Port Security & ACLs']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900/60 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            CHỨNG CHỈ CHUYÊN NGÀNH & ĐÀO TẠO
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Chứng chỉ Chuyên môn Quản trị Mạng & Hệ thống
          </p>
          <p className="mt-3 text-slate-400 text-sm">
            Được đào tạo và cấp chứng chỉ bởi các trung tâm công nghệ mạng uy tín tại Việt Nam
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        {/* Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div 
              key={cert.id} 
              className={`p-6 sm:p-7 rounded-2xl border ${cert.color} backdrop-blur-sm flex flex-col justify-between hover:translate-y-[-4px] transition duration-200 shadow-xl`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 border border-slate-700">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${cert.badge}`}>
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {cert.title}
                </h3>
                {cert.subtitle && (
                  <p className="text-xs font-mono text-emerald-400 mt-0.5">{cert.subtitle}</p>
                )}
                <p className="text-xs text-slate-400 font-medium mt-1">
                  Đơn vị đào tạo: <span className="text-slate-200">{cert.issuer}</span>
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="text-[11px] font-mono uppercase tracking-wide text-slate-400 mb-2">
                    Kỹ năng cốt lõi được chứng thực:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {cert.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
