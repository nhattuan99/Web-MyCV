const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || (
  import.meta.env.VITE_APP_ENV === 'Production' ? 'http://localhost:4000/api' : 'http://localhost:4001/api'
);

export const APP_ENV = import.meta.env.VITE_APP_ENV || 'UAT';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    return await res.json();
  } catch (error) {
    return { status: 'DOWN', error: error.message };
  }
}

export async function submitContact(formData) {
  const res = await fetch(`${API_BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error?.message || 'Có lỗi xảy ra khi gửi tin nhắn');
  }
  return data;
}

export async function fetchContacts(adminKey = '') {
  const headers = {};
  if (adminKey) {
    headers['x-admin-key'] = adminKey;
  }
  const res = await fetch(`${API_BASE_URL}/contacts`, { headers });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error?.message || 'Không thể tải danh sách liên hệ');
  }
  return data;
}

export async function deleteContactItem(id, adminKey = '') {
  const headers = {};
  if (adminKey) {
    headers['x-admin-key'] = adminKey;
  }
  const res = await fetch(`${API_BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
    headers,
  });
  return await res.json();
}

export async function trackVisit() {
  try {
    await fetch(`${API_BASE_URL}/analytics/visit`, { method: 'POST' });
  } catch (e) {
    // Non-blocking
  }
}

export async function trackDownload(format = 'PDF') {
  try {
    await fetch(`${API_BASE_URL}/analytics/download-cv`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ format }),
    });
  } catch (e) {
    // Non-blocking
  }
}

export async function fetchAnalyticsSummary() {
  try {
    const res = await fetch(`${API_BASE_URL}/analytics/summary`);
    return await res.json();
  } catch (e) {
    return { metrics: { totalVisitors: 0, cvDownloads: 0, inquiriesReceived: 0 } };
  }
}

export async function resetUatDatabase() {
  const res = await fetch(`${API_BASE_URL}/uat/reset`, { method: 'POST' });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error?.message || 'Không thể reset UAT');
  }
  return data;
}

export { API_BASE_URL };
