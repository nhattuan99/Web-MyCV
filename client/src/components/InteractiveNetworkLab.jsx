import React, { useState } from 'react';
import { 
  Network, 
  ShieldCheck, 
  Server, 
  Laptop, 
  PhoneCall, 
  Wifi, 
  Globe, 
  Terminal, 
  ArrowRight, 
  CheckCircle,
  HardDrive,
  Activity,
  Layers
} from 'lucide-react';

export default function InteractiveNetworkLab() {
  const [selectedNode, setSelectedNode] = useState('fortigate');

  const topologyNodes = {
    isp: {
      name: 'Dual ISP Internet Gateway',
      type: 'WAN Layer',
      icon: Globe,
      status: 'Active / Backup',
      description: 'Đường truyền Internet kép (VNPT & FPT) với tính năng Multi-WAN Load Balancing & Auto Failover.',
      configSnippet: `# Cấu hình Dual-WAN trên DrayTek / FortiGate:
wan1: IP 118.69.x.x (FPT Fiber 300Mbps)
wan2: IP 113.161.x.x (VNPT Fiber 200Mbps)
Link Failover: Tự động chuyển mạch khi mất kết nối WAN chính`,
      keyTasks: ['Kiểm tra băng thông và độ trễ ISP', 'Giám sát IP tĩnh WAN', 'Cấu hình cân bằng tải phiên truy cập']
    },
    fortigate: {
      name: 'Fortinet FortiGate 100F (Perimeter Firewall)',
      type: 'Security Layer',
      icon: ShieldCheck,
      status: 'Protected • IPS Active',
      description: 'Tường lửa bảo vệ vòng ngoài, kiểm soát toàn bộ luồng dữ liệu vào/ra công ty, thiết lập IPsec VPN và Web Filtering.',
      configSnippet: `config firewall policy
    edit 1
        set name "LAN_to_WAN_Internet"
        set srcintf "port1_LAN"
        set dstintf "port2_WAN1"
        set srcaddr "all"
        set dstaddr "all"
        set action accept
        set schedule "always"
        set service "ALL"
        set utm-status enable
        set webfilter-profile "Corporate_Block_Social"
        set nat enable
    next
end`,
      keyTasks: ['Tạo chính sách lọc URL độc hại', 'Mã hóa kết nối Site-to-Site VPN', 'Chặn cổng quét nguy hiểm (Port Scan)']
    },
    cisco_core: {
      name: 'Cisco Catalyst 3750 (Core Switch L3)',
      type: 'Routing & Distribution',
      icon: Server,
      status: 'L3 Routing Active',
      description: 'Đóng vai trò Core Switch định tuyến giữa các VLAN (SVI), cấp phát Gateway nội bộ và chạy định tuyến động OSPF.',
      configSnippet: `Switch# configure terminal
Switch(config)# ip routing
Switch(config)# interface vlan 10
Switch(config-if)# ip address 192.168.10.1 255.255.255.0
Switch(config)# interface vlan 20
Switch(config-if)# ip address 192.168.20.1 255.255.255.0
Switch(config)# router ospf 1
Switch(config-router)# network 192.168.0.0 0.0.255.255 area 0`,
      keyTasks: ['Cấu hình Switched Virtual Interfaces (SVI)', 'Giao thức Spanning Tree (RSTP) chống Loop', 'Thiết lập ACL ngăn cách ly mạng phòng ban']
    },
    vlan_servers: {
      name: 'VLAN 10: Server Farm & Synology NAS',
      type: 'Data & Storage Zone',
      icon: HardDrive,
      status: 'Subnet 192.168.10.0/24',
      description: 'Khu vực máy chủ ứng dụng nội bộ, Active Directory Domain Controller, thiết bị lưu trữ Synology NAS và Zabbix Monitoring Server.',
      configSnippet: `# Synology NAS DSM Config:
SMB Protocol: SMB2 & SMB3 enabled
RAID Type: RAID 5 (Bảo vệ dữ liệu khi hỏng 1 ổ cứng)
Backup Task: Hyper Backup đồng bộ dữ liệu hàng đêm lên Cloud`,
      keyTasks: ['Phân quyền truy cập thư mục theo phòng ban', 'Giám sát dung lượng ổ đĩa qua Zabbix', 'Kiểm tra log sao lưu định kỳ']
    },
    vlan_users: {
      name: 'VLAN 20: Nhân viên & Laptops (1,000+ Users)',
      type: 'User Workstations',
      icon: Laptop,
      status: 'Subnet 192.168.20.0/24',
      description: 'Dải mạng làm việc chính của nhân sự công ty, trang bị DHCP Snooping và Port Security bảo vệ an toàn cổng cắm.',
      configSnippet: `Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security violation restrict
Switch(config-if)# ip dhcp snooping limit rate 50`,
      keyTasks: ['Cài đặt laptop nhân sự mới với Windows 11 Enterprise', 'Xử lý sự cố Outlook, Teams, OneDrive', 'Quản lý tài khoản và reset mật khẩu']
    },
    vlan_voip: {
      name: 'VLAN 30: Hệ thống Thoại VoIP & IP Phone',
      type: 'Voice Network',
      icon: PhoneCall,
      status: 'Subnet 192.168.30.0/24',
      description: 'Dải mạng ưu tiên QoS cho tín hiệu thoại IP Phone, kết nối tổng đài PBX nội bộ, giảm thiểu tối đa hiện tượng trễ tiếng hay rớt cuộc gọi.',
      configSnippet: `# Cấu hình Voice VLAN trên Switch:
Switch(config-if)# switchport voice vlan 30
# Cấu hình SIP Extension trên IP Phone:
SIP Server: 192.168.30.10:5060
Codec ưu tiên: G.711u / G.729 (Tiết kiệm băng thông)`,
      keyTasks: ['Đăng ký số máy nhánh mới cho nhân viên', 'Xử lý lỗi mất âm thanh 1 chiều (NAT traversal)', 'Bảo trì đường truyền tổng đài']
    },
    branch_vpn: {
      name: 'DrayTek Vigor 2925 (Chi nhánh kết nối VPN)',
      type: 'Site-to-Site IPsec VPN',
      icon: Network,
      status: 'IPsec Tunnel UP',
      description: 'Router văn phòng chi nhánh, duy trì đường hầm VPN IPsec mã hóa kết nối trực tiếp về trụ sở chính an toàn tuyệt đối.',
      configSnippet: `# DrayTek LAN-to-LAN VPN Profile:
Remote Gateway: IP Trụ Sở Chính
IKE Version: IKEv2
Pre-Shared Key: ********** (256-bit AES)
Local Subnet: 192.168.50.0/24 -> Remote: 192.168.10.0/24`,
      keyTasks: ['Duy trì kết nối thông suốt giữa 2 văn phòng', 'Phân luồng lưu lượng truy cập qua VPN', 'Khôi phục kết nối tự động khi rớt mạng']
    }
  };

  const currentNode = topologyNodes[selectedNode];

  return (
    <section id="network-lab" className="py-20 bg-slate-950 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE ENTERPRISE INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Mô hình Hạ tầng Mạng Doanh nghiệp Thực chiến
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Nhấn vào từng thành phần thiết bị bên dưới để xem kiến trúc kết nối và lệnh cấu hình (Cisco IOS, FortiGate, DrayTek) mà Nhật Tuấn đã triển khai thực tế.
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Visual Topology Diagram */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span>SƠ ĐỒ TOPOLOGY NỘI BỘ</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Trạng thái: Online 100%
              </span>
            </div>

            {/* Topology Flow Nodes */}
            <div className="py-6 space-y-6">
              
              {/* Level 1: Internet WAN */}
              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedNode('isp')}
                  className={`px-5 py-2.5 rounded-xl border flex items-center gap-2.5 transition transform hover:scale-105 ${
                    selectedNode === 'isp'
                      ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-blue-500/50 shadow-lg'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-blue-400'
                  }`}
                >
                  <Globe className="w-4 h-4 text-sky-300" />
                  <span className="font-semibold text-xs sm:text-sm">Internet (Dual ISP: VNPT & FPT)</span>
                </button>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-6 bg-slate-700 mx-auto"></div>

              {/* Level 2: Firewall */}
              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedNode('fortigate')}
                  className={`px-6 py-3 rounded-xl border flex items-center gap-3 transition transform hover:scale-105 ${
                    selectedNode === 'fortigate'
                      ? 'bg-rose-600 text-white border-rose-400 ring-2 ring-rose-500/50 shadow-lg'
                      : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-rose-400'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 text-rose-300" />
                  <div className="text-left">
                    <div className="font-bold text-xs sm:text-sm">Fortinet FortiGate 100F</div>
                    <div className="text-[10px] opacity-80 font-mono">Perimeter Firewall & NAT</div>
                  </div>
                </button>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-6 bg-slate-700 mx-auto"></div>

              {/* Level 3: Core Switch */}
              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedNode('cisco_core')}
                  className={`px-6 py-3 rounded-xl border flex items-center gap-3 transition transform hover:scale-105 ${
                    selectedNode === 'cisco_core'
                      ? 'bg-indigo-600 text-white border-indigo-400 ring-2 ring-indigo-500/50 shadow-lg'
                      : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-indigo-400'
                  }`}
                >
                  <Server className="w-5 h-5 text-indigo-300" />
                  <div className="text-left">
                    <div className="font-bold text-xs sm:text-sm">Cisco Catalyst 3750 (L3 Core)</div>
                    <div className="text-[10px] opacity-80 font-mono">SVI Routing, OSPF, HSRP</div>
                  </div>
                </button>
              </div>

              {/* Bus Line & Distribution to VLANs */}
              <div className="pt-2">
                <div className="w-full h-0.5 bg-slate-700"></div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-3">
                  
                  {/* VLAN 10 */}
                  <button
                    onClick={() => setSelectedNode('vlan_servers')}
                    className={`p-3 rounded-xl border text-center transition ${
                      selectedNode === 'vlan_servers'
                        ? 'bg-sky-900/60 border-sky-400 ring-1 ring-sky-400'
                        : 'bg-slate-800/60 border-slate-700/60 hover:border-sky-500'
                    }`}
                  >
                    <HardDrive className="w-4 h-4 mx-auto text-sky-400 mb-1" />
                    <div className="font-bold text-[11px] sm:text-xs">VLAN 10: Server</div>
                    <div className="text-[9px] text-slate-400 font-mono">Synology NAS & Zabbix</div>
                  </button>

                  {/* VLAN 20 */}
                  <button
                    onClick={() => setSelectedNode('vlan_users')}
                    className={`p-3 rounded-xl border text-center transition ${
                      selectedNode === 'vlan_users'
                        ? 'bg-emerald-900/60 border-emerald-400 ring-1 ring-emerald-400'
                        : 'bg-slate-800/60 border-slate-700/60 hover:border-emerald-500'
                    }`}
                  >
                    <Laptop className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
                    <div className="font-bold text-[11px] sm:text-xs">VLAN 20: Users</div>
                    <div className="text-[9px] text-slate-400 font-mono">1,000+ Laptops M365</div>
                  </button>

                  {/* VLAN 30 */}
                  <button
                    onClick={() => setSelectedNode('vlan_voip')}
                    className={`p-3 rounded-xl border text-center transition ${
                      selectedNode === 'vlan_voip'
                        ? 'bg-purple-900/60 border-purple-400 ring-1 ring-purple-400'
                        : 'bg-slate-800/60 border-slate-700/60 hover:border-purple-500'
                    }`}
                  >
                    <PhoneCall className="w-4 h-4 mx-auto text-purple-400 mb-1" />
                    <div className="font-bold text-[11px] sm:text-xs">VLAN 30: VoIP</div>
                    <div className="text-[9px] text-slate-400 font-mono">IP Phone PBX</div>
                  </button>

                </div>
              </div>

              {/* Branch Connection via VPN */}
              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={() => setSelectedNode('branch_vpn')}
                  className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition ${
                    selectedNode === 'branch_vpn'
                      ? 'bg-amber-950/60 border-amber-400 ring-1 ring-amber-400'
                      : 'bg-slate-800/40 border-slate-700/60 hover:border-amber-400 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Network className="w-5 h-5 text-amber-400" />
                    <div className="text-left">
                      <div className="font-bold text-xs sm:text-sm text-white">Chi nhánh: DrayTek Vigor 2925</div>
                      <div className="text-[10px] text-slate-400 font-mono">Site-to-Site IPsec VPN Tunnel</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800">
                    Mã hóa 256-bit AES
                  </span>
                </button>
              </div>

            </div>
          </div>

          {/* Right: Technical Specs & CLI Snippet Viewer */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Component Header */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-400 font-semibold px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-800">
                  {currentNode.type}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {currentNode.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-2">
                {currentNode.name}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {currentNode.description}
              </p>
            </div>

            {/* Key Implementation Tasks */}
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                Nhiệm vụ & Kỹ thuật triển khai:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {currentNode.keyTasks.map((task, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Embedded Terminal CLI Viewer */}
            <div>
              <div className="flex items-center justify-between pb-1.5 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  CLI Configuration Snippet
                </span>
                <span className="text-[10px] text-slate-500">Read-Only</span>
              </div>

              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed shadow-inner">
                <pre>{currentNode.configSnippet}</pre>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-[11px] text-slate-400 leading-normal">
              💡 <em>Lưu ý chuyên môn:</em> Kiến trúc trên được tối ưu hóa cho doanh nghiệp từ 200 - 1,000 người dùng, đảm bảo cách ly bảo mật theo chuẩn ISO 27001 và có tính dự phòng cao.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
