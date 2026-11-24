const config = require('../config');
const db = require('../database');

function createContact(req, res, next) {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // Enterprise Input Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: { message: 'Vui lòng nhập họ tên hợp lệ (tối thiểu 2 ký tự).', code: 'INVALID_NAME' }
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: { message: 'Vui lòng cung cấp email hợp lệ để nhận phản hồi.', code: 'INVALID_EMAIL' }
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        error: { message: 'Vui lòng nhập nội dung tin nhắn (tối thiểu 5 ký tự).', code: 'INVALID_MESSAGE' }
      });
    }

    const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    const result = db.run(
      `INSERT INTO contacts (name, email, phone, company, subject, message, ip_address, user_agent, environment, status, is_read)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'NEW', 0)`,
      [
        name.trim(),
        email.trim().toLowerCase(),
        phone ? phone.trim() : null,
        company ? company.trim() : null,
        subject ? subject.trim() : 'Liên hệ qua CV Online',
        message.trim(),
        clientIp,
        userAgent,
        config.env
      ]
    );

    return res.status(201).json({
      success: true,
      environment: config.env,
      message: 'Tin nhắn đã được gửi thành công đến Lê Quang Nhật Tuấn!',
      data: {
        receiptId: result.lastInsertRowid,
        submittedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    next(error);
  }
}

function getContacts(req, res, next) {
  try {
    const contacts = db.query(
      `SELECT id, name, email, phone, company, subject, message, environment, status, is_read, created_at
       FROM contacts
       WHERE environment = ?
       ORDER BY id DESC LIMIT 100`,
      [config.env]
    );

    return res.json({
      success: true,
      environment: config.env,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    next(error);
  }
}

function deleteContact(req, res, next) {
  try {
    const { id } = req.params;
    
    // In production, deleting requires admin key; in UAT, QA can delete test records
    db.run('DELETE FROM contacts WHERE id = ? AND environment = ?', [id, config.env]);

    return res.json({
      success: true,
      environment: config.env,
      message: `Đã xóa tin nhắn #${id}`
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createContact,
  getContacts,
  deleteContact
};
