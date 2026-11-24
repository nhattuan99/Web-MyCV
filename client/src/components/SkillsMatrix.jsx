import React, { useState } from 'react';
import { 
  Network, 
  ShieldCheck, 
  Server, 
  Laptop, 
  Terminal, 
  Cpu, 
  Activity, 
  Check, 
  Layers,
  HardDrive
} from 'lucide-react';

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('devices');

  const categories = [
    { id: 'devices', label: 'Thiết bị & Phần cứng Mạng', icon: Server },
    { id: 'protocols', label: 'Giao thức & Kỹ thuật L2/L3', icon: Network },
    { id: 'firewalls', label: 'Tường lửa & Bảo mật', icon: ShieldCheck },
    { id: 'helpdesk', label: 'ITSM, M365 & Tự động hóa', icon: Laptop },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/40 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            NĂNG LỰC CHUYÊN MÔN & THIẾT BỊ
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Ma trận Kỹ năng & Danh mục Thiết bị đã làm chủ
          </p>
          <p className="mt-3 text-slate-400 text-sm">
            Kinh nghiệm cấu hình thực tế trên thiết bị phần cứng vật lý tại các doanh nghiệp
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition duration-150 ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Section by Category */}
        <div className="min-h-[380px]">
          
          {/* TAB 1: DEVICES */}
          {activeCategory === 'devices' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Switches */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Switches Doanh nghiệp</h3>
                    <p className="text-xs text-slate-400 font-mono">Access & Core Switches</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-semibold text-sky-300">Cisco Catalyst:</span>
                    <span className="text-slate-300 text-xs block mt-0.5">2960 Series & 3750 Layer 3 Switch</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-semibold text-emerald-300">HP ProCurve:</span>
                    <span className="text-slate-300 text-xs block mt-0.5">2610-28 Enterprise Switch</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-semibold text-purple-300">Juniper & Dell:</span>
                    <span className="text-slate-300 text-xs block mt-0.5">Juniper EX4200 & Dell PowerConnect 5524</span>
                  </div>
                </div>
              </div>

              {/* Routers */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Routers & Gateway</h3>
                    <p className="text-xs text-slate-400 font-mono">Load Balancing & WAN</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-semibold text-amber-300">DrayTek Vigor:</span>
                    <span className="text-slate-300 text-xs block mt-0.5">Vigor 2920 / 2925 / 2927 (Multi-WAN, VLAN, VPN)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-semibold text-sky-300">MikroTik RouterOS:</span>
                    <span className="text-slate-300 text-xs block mt-0.5">RB750Gr3 (hEX) & RB4011iGS+RM Enterprise Router</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-semibold text-rose-300">Cisco Integrated Services:</span>
                    <span className="text-slate-300 text-xs block mt-0.5">Cisco 1841 Modular Router (IOS CLI)</span>
                  </div>
                </div>
              </div>

              {/* Storage & Telephony */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Lưu trữ & Hệ thống Thoại</h3>
                    <p className="text-xs text-slate-400 font-mono">Storage & PBX/VoIP</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-semibold text-purple-300">Synology NAS:</span>
                    <span className="text-slate-300 text-xs block mt-0.5">Quản trị DSM, phân quyền chia sẻ file SMB/NFS, backup tự động</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-semibold text-sky-300">VoIP / PBX System:</span>
                    <span className="text-slate-300 text-xs block mt-0.5">Cấu hình máy nhánh SIP, IP Phone, xử lý sự cố đàm thoại nội bộ</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-semibold text-emerald-300">Zabbix Monitoring:</span>
                    <span className="text-slate-300 text-xs block mt-0.5">Giám sát ICMP ping, SNMP traps, cảnh báo sự cố hạ tầng</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PROTOCOLS */}
          {activeCategory === 'protocols' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-sky-400 mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  <span>Layer 2 Switching & Quản lý Cổng</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { title: 'Access & Trunk Ports', desc: 'Phân định cổng cắm user và cổng liên kết trunk giữa các switch' },
                    { title: '802.1Q VLAN Segmentation', desc: 'Phân tách dải mạng cô lập giữa phòng IT, Kế toán, Nhân viên, Khách' },
                    { title: 'DHCP Pool Management', desc: 'Cấu hình cấp phát IP tự động, Reservation theo địa chỉ MAC' },
                    { title: 'Port Security', desc: 'Khóa cổng chống cắm thiết bị lạ trái phép (MAC limit/violation)' },
                    { title: 'DHCP Snooping', desc: 'Ngăn chặn tấn công Rogue DHCP Server trên switch' },
                    { title: 'STP / RSTP', desc: 'Chống loop mạng (Broadcast Storm) với giao thức Spanning Tree' },
                    { title: 'LACP (Link Aggregation)', desc: 'Gộp băng thông đa đường truyền vật lý tăng tốc độ kết nối' },
                    { title: 'Interface Diagnostics', desc: 'Kiểm tra cáp mạng, speed, duplex mismatch và lỗi CRC' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/40">
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-slate-400 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <Network className="w-5 h-5" />
                  <span>Layer 3 Routing, Dự phòng & VPN</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { title: 'SVI (Switch Virtual Interface)', desc: 'Cấu hình định tuyến trực tiếp trên Core Switch' },
                    { title: 'Static Routing & Default Route', desc: 'Định tuyến tĩnh chuyển tiếp luồng dữ liệu ra Internet Gateway' },
                    { title: 'OSPF Dynamic Routing', desc: 'Thiết lập định tuyến động giữa các Router và Core Switch' },
                    { title: 'Access Control Lists (ACL)', desc: 'Thiết lập quy tắc lọc gói tin, ngăn chặn truy cập giữa các VLAN' },
                    { title: 'HSRP & VRRP Gateway Redundancy', desc: 'Dự phòng cổng mạng mặc định, tự động chuyển đổi khi lỗi router' },
                    { title: 'Site-to-Site IPsec VPN', desc: 'Mã hóa kênh truyền bảo mật nối văn phòng chi nhánh' },
                    { title: 'Client-to-Site VPN', desc: 'Cung cấp đường hầm VPN an toàn cho nhân viên làm việc từ xa (WFH)' },
                    { title: 'Network Troubleshooting', desc: 'Sử dụng lệnh Ping, Traceroute, Telnet/SSH, kiểm tra độ trễ mạng' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/40">
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-slate-400 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FIREWALLS */}
          {activeCategory === 'firewalls' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Fortinet FortiGate Firewall</h3>
                    <p className="text-xs text-slate-400 font-mono">Dòng 60D & 100F Enterprise</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div><strong>Firewall Policies:</strong> Tạo các chính sách cho phép/chặn lưu lượng mạng giữa mạng LAN, DMZ và WAN.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div><strong>NAT & Virtual IPs:</strong> Cấu hình Port Forwarding (VIP) để mở dịch vụ nội bộ an toàn ra Internet.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div><strong>IPsec VPN Tunnel:</strong> Thiết lập và xử lý sự cố đường hầm VPN kết nối chi nhánh.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div><strong>Security Profiles:</strong> Cấu hình Web Filtering (chặn website độc hại/mạng xã hội), Antivirus scan trên luồng dữ liệu.</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Sophos XGS-128 Next-Gen</h3>
                    <p className="text-xs text-slate-400 font-mono">Next-Gen Network Protection</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div><strong>Firewall Rules:</strong> Thiết lập quy tắc kiểm soát lưu lượng theo Zone và địa chỉ IP nguồn/đích.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div><strong>Application Control:</strong> Phân tích và quản lý ứng dụng mạng (chặn P2P, torrent, game).</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div><strong>SSL/TLS Inspection:</strong> Kiểm tra lưu lượng mã hóa và phát hiện các mối đe dọa tiềm ẩn.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-start gap-2">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div><strong>Log Analysis & Alerts:</strong> Theo dõi log truy cập và cảnh báo xâm nhập bất thường.</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: HELPDESK & AUTOMATION */}
          {activeCategory === 'helpdesk' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Hệ sinh thái Microsoft 365</h3>
                    <p className="text-xs text-slate-400 font-mono">Prudential Enterprise</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">Outlook / Exchange Online: Cấu hình hòm thư, xử lý lỗi đồng bộ PST/OST</div>
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">Microsoft Teams & OneDrive: Phân quyền lưu trữ, chia sẻ và meeting online</div>
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">Azure AD / Active Directory: Quản lý tài khoản người dùng, reset mật khẩu, MFA</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Hệ thống ITSM & Quản lý</h3>
                    <p className="text-xs text-slate-400 font-mono">ServiceNow & Remedy</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">ServiceNow Ticket Workflow: Quản lý Incident, Service Request theo SLA</div>
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">Remedy (Salesforce): Tiếp nhận yêu cầu hỗ trợ và cập nhật tiến độ</div>
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">Asset Management: Quản lý vòng đời tài sản laptop từ bàn giao đến thu hồi</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Sáng kiến Tự động hóa</h3>
                    <p className="text-xs text-slate-400 font-mono">Microsoft Power Platform</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">Microsoft Power Apps: Thiết kế giao diện ứng dụng xin nghỉ phép nội bộ</div>
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">Power Automate: Tạo luồng tự động gửi thông báo phê duyệt tới quản lý qua email & Teams</div>
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">Tối ưu hóa thời gian xử lý thủ tục hành chính, giảm tải giấy tờ cho phòng ban</div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
