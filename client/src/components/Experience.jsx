import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  ShieldAlert, 
  Cpu, 
  Network, 
  Zap, 
  Laptop,
  Flame,
  Award
} from 'lucide-react';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      id: 'prudential',
      company: 'Prudential Insurance Vietnam Co., Ltd.',
      role: 'IT Service Support',
      period: '07/2025 - Hiện tại',
      duration: 'Đang làm việc',
      tag: 'Tập đoàn Tài chính - Bảo hiểm Đa quốc gia',
      badgeColor: 'border-rose-500/40 bg-rose-950/40 text-rose-300',
      description: 'Cung cấp dịch vụ hỗ trợ kỹ thuật L1 cho hơn 1,000+ người dùng nội bộ và đối tác, duy trì hoạt động thông suốt của hệ thống văn phòng và tự động hóa quy trình với Microsoft Power Platform.',
      highlights: [
        'Hỗ trợ L1 cho 1,000+ người dùng: Xử lý sự cố phần cứng, phần mềm, hệ điều hành Windows và bộ giải pháp đám mây Microsoft 365 (M365).',
        'Quản lý bộ công cụ M365: Chẩn đoán và giải quyết các vấn đề liên quan đến Outlook, Microsoft Teams, OneDrive, SharePoint, ứng dụng Office và tài khoản người dùng.',
        'Laptop Setup & Deployment: Cài đặt hệ điều hành, cấu hình chính sách bảo mật, phần mềm chuyên dụng và môi trường làm việc chuẩn hóa cho nhân sự mới.',
        'IT Asset Management: Quản lý quy trình bàn giao, kiểm kê và thu hồi tài sản thiết bị IT theo quy chuẩn nghiêm ngặt của tập đoàn.',
        'Ticket Tracking qua Remedy (Salesforce) & ServiceNow: Tiếp nhận, phân loại và xử lý ticket theo đúng cam kết SLA; lập tài liệu KB và chuyển cấp L2/L3 khi vượt thẩm quyền.',
        'Đảm bảo tuân thủ bảo mật: Hỗ trợ người dùng tại văn phòng (On-site) và từ xa (Remote Support qua Quick Assist) tuân thủ chính sách bảo mật tài chính.',
        '⭐ SÁNG KIẾN TỰ ĐỘNG HÓA NỔI BẬT: Trực tiếp xây dựng ứng dụng xin nghỉ phép nội bộ bằng Microsoft Power Apps và Power Automate, giúp số hóa hoàn toàn quy trình xét duyệt của phòng ban.'
      ],
      technologies: ['Microsoft 365', 'ServiceNow', 'Salesforce Remedy', 'Power Apps', 'Power Automate', 'Azure AD', 'Windows 11 Enterprise', 'Remote Support']
    },
    {
      id: 'unitek',
      company: 'UNITEK International Co., Ltd.',
      role: 'IT Helpdesk / Support Specialist',
      period: '08/2023 - 06/2025',
      duration: '1 năm 11 tháng',
      tag: 'Doanh nghiệp Công nghệ & Hạ tầng Mạng',
      badgeColor: 'border-sky-500/40 bg-sky-950/40 text-sky-300',
      description: 'Chịu trách nhiệm trực tiếp cấu hình, bảo trì và giám sát toàn bộ hạ tầng thiết bị mạng đa hãng (Cisco, HP, Juniper, Dell, DrayTek, MikroTik) và hệ thống an ninh tường lửa Fortinet & Sophos.',
      highlights: [
        'Cấu hình hạ tầng Switch đa hãng: Làm việc trực tiếp với Cisco Catalyst 2960/3750, HP ProCurve 2610-28, Juniper EX4200, Dell PowerConnect 5524 switches.',
        'Cấu hình Router doanh nghiệp: Triển khai và quản trị DrayTek Vigor 2920/2925/2927, MikroTik RB750Gr3/RB4011iGS+RM, Cisco 1841.',
        'Bảo mật với Tường lửa: Cấu hình và xử lý sự cố trên thiết bị Firewall Fortinet 60D/100F và Sophos XGS-128.',
        'Thiết lập tính năng Layer 2 & Security: Access/Trunk ports, VLAN, DHCP pools, Port Security chống cắm thiết bị lạ, DHCP Snooping chống rogue server, STP/RSTP chống loop, LACP gộp kênh truyền.',
        'Định tuyến Layer 3 & Dự phòng: Cấu hình SVI, Static Routing, Access Control List (ACL), giao thức dự phòng Gateway HSRP, VRRP và định tuyến động OSPF.',
        'Triển khai giải pháp VPN: Thiết lập Client-to-Site VPN cho nhân sự làm việc từ xa và Site-to-Site IPsec VPN kết nối văn phòng chi nhánh an toàn.',
        'Khắc phục sự cố mạng (Troubleshooting): Sử dụng ping, traceroute, kiểm tra interface counters, duplex mode, phân tích gói tin để bắt lỗi đứt gãy mạng.',
        'Vận hành VoIP PBX & Synology NAS: Cấu hình máy nhánh tổng đài nội bộ; quản trị phân quyền dữ liệu và backup trên thiết bị lưu trữ Synology NAS.',
        'Giám sát 24/7 với Zabbix: Thiết lập Zabbix Server để giám sát tình trạng hoạt động (Availability), uptime và cảnh báo sự cố hạ tầng CNTT.'
      ],
      technologies: ['Cisco Catalyst', 'MikroTik RouterOS', 'DrayTek Vigor', 'Fortinet FortiGate', 'Sophos XGS', 'OSPF / VLAN / STP', 'Site-to-Site VPN', 'Zabbix', 'Synology NAS', 'VoIP/PBX']
    },
    {
      id: 'duythanh',
      company: 'Duy Thanh Plastic Manufacturing & Trading Co., Ltd.',
      role: 'IT Helpdesk & Inventory',
      period: '08/2022 - 07/2023',
      duration: '1 năm',
      tag: 'Sản xuất & Thương mại',
      badgeColor: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
      description: 'Hỗ trợ kỹ thuật L1 tổng hợp (phần cứng, mạng, phần mềm), quản lý dữ liệu tồn kho hàng hóa và vận hành các gian hàng thương mại điện tử của công ty.',
      highlights: [
        'Hỗ trợ kỹ thuật người dùng cấp độ 1: Khắc phục sự cố máy tính, máy in văn phòng, mạng LAN/Wifi nội bộ và các phần mềm tác nghiệp.',
        'Quản lý dữ liệu kho & kiểm kê: Theo dõi xuất - nhập - tồn trên hệ thống, đối chiếu dữ liệu định kỳ với bộ phận kho vận.',
        'Phát triển nội dung số & truyền thông: Thiết kế hình ảnh, biên tập tài liệu và video ngắn hỗ trợ quảng bá sản phẩm trên website và mạng xã hội.',
        'Vận hành E-Commerce: Quản lý và cập nhật thông tin sản phẩm, chương trình khuyến mãi trên Shopee, Lazada và TikTok Shop.'
      ],
      technologies: ['IT Helpdesk L1', 'Warehouse Inventory', 'E-Commerce (Shopee/Lazada/TikTok)', 'Basic Hardware Diagnostics', 'Content & Graphic Tools']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            LỊCH SỬ LÀM VIỆC & KINH NGHIỆM THỰC CHIẾN
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Hành trình 3+ năm cống hiến tại các doanh nghiệp
          </p>
          <p className="mt-3 text-slate-400 text-sm">
            Từ hỗ trợ người dùng quy mô 1,000+ nhân sự tới trực tiếp cấu hình thiết bị mạng lõi & tường lửa
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        {/* Company Selector Tabs for Desktop/Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Company list pills */}
          <div className="lg:col-span-4 space-y-3">
            {experiences.map((exp, idx) => {
              const isSelected = activeExp === idx;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-800/90 border-sky-500 ring-1 ring-sky-500/50 shadow-lg shadow-sky-950/50'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border ${exp.badgeColor}`}>
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">{exp.duration}</span>
                  </div>

                  <div className="mt-2">
                    <h3 className={`font-bold text-base leading-snug ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                      {exp.company}
                    </h3>
                    <p className={`text-xs mt-1 font-mono ${isSelected ? 'text-sky-400' : 'text-slate-400'}`}>
                      {exp.role}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Quick Summary Box */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-sky-950/40 to-slate-900 border border-sky-800/30 text-xs text-slate-300 space-y-2 mt-6">
              <div className="font-semibold text-sky-300 flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                <span>Năng lực nổi bật của Nhật Tuấn:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Được đánh giá cao nhờ sự cẩn trọng, khả năng làm việc độc lập dưới áp lực SLA, và nền tảng hạ tầng mạng vững giúp kết nối hiệu quả giữa Helpdesk L1 và đội ngũ Network/System cấp cao.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top Info */}
            <div className="border-b border-slate-800 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded border ${experiences[activeExp].badgeColor}`}>
                  {experiences[activeExp].tag}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {experiences[activeExp].period} ({experiences[activeExp].duration})
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {experiences[activeExp].role}
              </h3>
              <p className="text-lg font-medium text-sky-400 mt-1">
                {experiences[activeExp].company}
              </p>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                {experiences[activeExp].description}
              </p>
            </div>

            {/* Detailed Responsibilities List */}
            <div className="py-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Trách nhiệm & Thành tích chi tiết:</span>
              </h4>

              <ul className="space-y-3.5">
                {experiences[activeExp].highlights.map((point, pIdx) => {
                  const isPowerApp = point.includes('SÁNG KIẾN');
                  return (
                    <li 
                      key={pIdx} 
                      className={`text-sm leading-relaxed flex items-start gap-3 p-2.5 rounded-lg transition ${
                        isPowerApp 
                          ? 'bg-amber-950/30 border border-amber-500/40 text-amber-200' 
                          : 'text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="border-t border-slate-800 pt-6">
              <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
                Công nghệ & Công cụ ứng dụng:
              </div>
              <div className="flex flex-wrap gap-2">
                {experiences[activeExp].technologies.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800 text-sky-300 border border-slate-700/80"
                  >
                    {tech}
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
