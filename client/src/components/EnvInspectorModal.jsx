import React, { useState, useEffect } from 'react';
import { 
  X, 
  Layers, 
  Database, 
  Server, 
  Activity, 
  RefreshCw, 
  Trash2, 
  CheckCircle, 
  AlertTriangle,
  Mail,
  Eye,
  Download,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { 
  APP_ENV, 
  APP_VERSION, 
  API_BASE_URL, 
  fetchHealth, 
  fetchContacts, 
  fetchAnalyticsSummary,
  resetUatDatabase,
  deleteContactItem 
} from '../services/api';

export default function EnvInspectorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('health');
  const [healthData, setHealthData] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [actionNotice, setActionNotice] = useState('');

  const isUAT = APP_ENV.toUpperCase().includes('UAT');

  const loadData = async () => {
    setLoading(true);
    setActionNotice('');
    try {
      const [h, a] = await Promise.all([
        fetchHealth(),
        fetchAnalyticsSummary()
      ]);
      setHealthData(h);
      setAnalytics(a?.metrics || null);

      // Load contacts
      const c = await fetchContacts(adminKey);
      setContacts(c.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [adminKey]);

  const handleResetUat = async () => {
    if (!window.confirm('Bạn có chắc muốn làm mới dữ liệu mẫu cho môi trường UAT?')) return;
    setLoading(true);
    try {
      const res = await resetUatDatabase();
      setActionNotice(res.message);
      await loadData();
    } catch (err) {
      setActionNotice(`Lỗi: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm(`Xóa tin nhắn #${id}?`)) return;
    try {
      await deleteContactItem(id, adminKey);
      setContacts(contacts.filter(c => c.id !== id));
      setActionNotice(`Đã xóa tin nhắn #${id}`);
    } catch (err) {
      setActionNotice(`Lỗi xóa: ${err.message}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md text-white">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Top Modal Header */}
        <div className={`p-4 sm:p-5 border-b flex items-center justify-between ${
          isUAT ? 'bg-amber-950/40 border-amber-500/30' : 'bg-slate-800/80 border-slate-700'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${isUAT ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg">Bảng Điều Khiển Hệ Thống & Cơ Sở Dữ Liệu</h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                  isUAT ? 'bg-amber-400 text-slate-950' : 'bg-emerald-400 text-slate-950'
                }`}>
                  {APP_ENV}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                API Base URL: {API_BASE_URL}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              disabled={loading}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="Làm mới dữ liệu"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-sky-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-4 pt-2 gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab('health')}
            className={`px-3 py-2 border-b-2 font-medium transition ${
              activeTab === 'health' ? 'border-sky-500 text-sky-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Sức Khỏe Hệ Thống & DB
          </button>

          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-3 py-2 border-b-2 font-medium transition flex items-center gap-1.5 ${
              activeTab === 'contacts' ? 'border-sky-500 text-sky-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <span>Tin Nhắn Trong Database</span>
            <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px] text-sky-300">
              {contacts.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-2 border-b-2 font-medium transition ${
              activeTab === 'guide' ? 'border-sky-500 text-sky-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Hướng Dẫn Chuyển Đổi Môi Trường
          </button>
        </div>

        {/* Action Notice Alert */}
        {actionNotice && (
          <div className="px-5 py-2.5 bg-sky-950/70 border-b border-sky-800 text-xs text-sky-300 flex items-center justify-between">
            <span>{actionNotice}</span>
            <button onClick={() => setActionNotice('')} className="text-slate-400 hover:text-white">&times;</button>
          </div>
        )}

        {/* Tab Contents Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: SYSTEM HEALTH & DB STATS */}
          {activeTab === 'health' && (
            <div className="space-y-6">
              {/* Metrics row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase mb-1">
                    <Eye className="w-4 h-4 text-sky-400" />
                    <span>Lượt xem ({APP_ENV})</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">
                    {analytics?.totalVisitors || 0}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase mb-1">
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Lượt tải CV PDF</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">
                    {analytics?.cvDownloads || 0}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase mb-1">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>Tin nhắn tuyển dụng</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">
                    {analytics?.inquiriesReceived || contacts.length}
                  </div>
                </div>
              </div>

              {/* Health payload */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400 uppercase">Live Healthcheck Payload (/api/health)</span>
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono ${
                    healthData?.status === 'UP' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400'
                  }`}>
                    <Activity className="w-3.5 h-3.5" />
                    STATUS: {healthData?.status || 'CONNECTING...'}
                  </span>
                </div>

                <div className="font-mono text-xs text-slate-300 space-y-1.5 divide-y divide-slate-800/80">
                  <div className="pt-1.5 flex justify-between">
                    <span className="text-slate-500">Môi trường (NODE_ENV):</span>
                    <span className="font-bold text-white uppercase">{healthData?.environment}</span>
                  </div>
                  <div className="pt-1.5 flex justify-between">
                    <span className="text-slate-500">Đường dẫn Database Storage:</span>
                    <span className="text-sky-300 font-semibold">{healthData?.database?.storage}</span>
                  </div>
                  <div className="pt-1.5 flex justify-between">
                    <span className="text-slate-500">Trạng thái Database:</span>
                    <span className="text-emerald-400">{healthData?.database?.status} ({healthData?.database?.type})</span>
                  </div>
                  <div className="pt-1.5 flex justify-between">
                    <span className="text-slate-500">Node Runtime / Uptime:</span>
                    <span>{healthData?.system?.nodeVersion} (Uptime: {healthData?.uptimeSeconds}s)</span>
                  </div>
                  <div className="pt-1.5 flex justify-between">
                    <span className="text-slate-500">Bộ nhớ Memory RSS:</span>
                    <span>{healthData?.system?.memoryRssMB} MB</span>
                  </div>
                </div>
              </div>

              {/* UAT Tooling Section */}
              {isUAT && (
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-amber-300 text-sm">Công cụ QA Tester (Chỉ có trong UAT)</h4>
                      <p className="text-xs text-slate-400">Thiết lập lại dữ liệu mẫu (Seeder) để kiểm thử giao diện.</p>
                    </div>

                    <button
                      onClick={handleResetUat}
                      disabled={loading}
                      className="px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs font-mono transition"
                    >
                      Reset UAT Data
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CONTACTS DATA VIEWER */}
          {activeTab === 'contacts' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Dữ liệu được đọc trực tiếp từ: <strong className="text-white font-mono">{healthData?.database?.storage}</strong>
                </span>

                {!isUAT && (
                  <div className="flex items-center gap-2">
                    <input
                      type="password"
                      placeholder="Nhập Admin Secret Key..."
                      value={adminKey}
                      onChange={(e) => setAdminKey(e.target.value)}
                      className="px-2.5 py-1 text-xs rounded bg-slate-800 border border-slate-700 text-white"
                    />
                  </div>
                )}
              </div>

              {contacts.length === 0 ? (
                <div className="p-8 text-center text-slate-400 border border-dashed border-slate-800 rounded-xl text-xs">
                  Chưa có tin nhắn nào trong cơ sở dữ liệu môi trường này. Hãy gửi một tin nhắn từ form liên hệ!
                </div>
              ) : (
                <div className="space-y-3">
                  {contacts.map((c) => (
                    <div key={c.id} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-slate-400 font-bold">#{c.id}</span>
                          <span className="font-bold text-white text-sm">{c.name}</span>
                          {c.company && <span className="text-slate-400">({c.company})</span>}
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-700 text-sky-300">
                            {c.environment}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 font-mono text-[11px]">{c.created_at}</span>
                          {isUAT && (
                            <button
                              onClick={() => handleDeleteContact(c.id)}
                              className="text-slate-500 hover:text-rose-400 transition"
                              title="Xóa tin nhắn test"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="text-slate-300 flex items-center gap-4 text-[11px] font-mono">
                        <span>Email: <strong className="text-white">{c.email}</strong></span>
                        {c.phone && <span>SĐT: <strong className="text-white">{c.phone}</strong></span>}
                      </div>

                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 text-xs">
                        {c.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: GUIDE TO SWITCH ENVIRONMENTS */}
          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-300">
              <h4 className="font-bold text-white text-sm">Hướng dẫn Vận hành Đồng thời 2 Môi trường UAT và Production</h4>
              
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono space-y-2">
                <div className="text-amber-400 font-semibold">// 1. Khởi chạy Môi trường UAT (Testing/Staging):</div>
                <div className="text-slate-200">npm run dev:uat</div>
                <div className="text-slate-400 text-[11px]">→ Frontend: http://localhost:3001 | Backend: http://localhost:4001 | DB: data/uat/cv_uat.sqlite</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono space-y-2">
                <div className="text-emerald-400 font-semibold">// 2. Khởi chạy Môi trường PRODUCTION (Chính thức):</div>
                <div className="text-slate-200">npm run dev:prod</div>
                <div className="text-slate-400 text-[11px]">→ Frontend: http://localhost:3000 | Backend: http://localhost:4000 | DB: data/prod/cv_prod.sqlite</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono space-y-2">
                <div className="text-sky-400 font-semibold">// 3. Chạy độc lập Backend API:</div>
                <div className="text-slate-200">npm run server:uat  # Hoặc npm run server:prod</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                <div className="font-semibold text-white">✨ Vì sao Doanh nghiệp lớn luôn bắt buộc tách 2 môi trường?</div>
                <ul className="space-y-1 list-disc list-inside text-slate-300">
                  <li><strong>Bảo vệ dữ liệu người dùng thật:</strong> Tránh trường hợp QA test form hoặc xóa database làm mất các tin nhắn phỏng vấn thật từ nhà tuyển dụng.</li>
                  <li><strong>Kiểm soát phiên bản:</strong> Bản cập nhật mới (ví dụ bổ sung chứng chỉ mới hoặc dự án mới) được review trước ở UAT, nghiệm thu đạt mới deploy lên Production.</li>
                  <li><strong>Tối ưu bảo mật:</strong> Môi trường Production bật chế độ ẩn stack trace lỗi, bật CORS khắt khe và rate limit nghiêm ngặt.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-between items-center text-xs">
          <span className="text-slate-400 font-mono">
            Antigravity Enterprise Deployment Standard
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
          >
            Đóng bảng kiểm tra
          </button>
        </div>

      </div>
    </div>
  );
}
