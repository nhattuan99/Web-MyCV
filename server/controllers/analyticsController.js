const crypto = require('crypto');
const config = require('../config');
const db = require('../database');

function hashIp(ip) {
  return crypto.createHash('sha256').update(ip + '-salt-enterprise-2026').digest('hex').substring(0, 16);
}

function recordVisit(req, res, next) {
  try {
    const rawIp = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
    const ipHash = hashIp(rawIp);
    const userAgent = req.headers['user-agent'] || 'unknown';
    const referer = req.headers['referer'] || 'direct';

    db.run(
      `INSERT INTO visitors (ip_hash, user_agent, referer, page_viewed, environment)
       VALUES (?, ?, ?, '/', ?)`,
      [ipHash, userAgent, referer, config.env]
    );

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}

function recordDownloadCv(req, res, next) {
  try {
    const rawIp = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
    const ipHash = hashIp(rawIp);
    const format = req.body.format || 'PDF';

    db.run(
      `INSERT INTO cv_downloads (ip_hash, format, environment)
       VALUES (?, ?, ?)`,
      [ipHash, format, config.env]
    );

    res.json({ success: true, message: 'CV download event tracked' });
  } catch (err) {
    next(err);
  }
}

function getSummary(req, res, next) {
  try {
    const visitorCount = db.get('SELECT COUNT(*) as count FROM visitors WHERE environment = ?', [config.env]).count;
    const downloadCount = db.get('SELECT COUNT(*) as count FROM cv_downloads WHERE environment = ?', [config.env]).count;
    const contactCount = db.get('SELECT COUNT(*) as count FROM contacts WHERE environment = ?', [config.env]).count;

    res.json({
      success: true,
      environment: config.env,
      metrics: {
        totalVisitors: visitorCount,
        cvDownloads: downloadCount,
        inquiriesReceived: contactCount
      }
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  recordVisit,
  recordDownloadCv,
  getSummary
};
