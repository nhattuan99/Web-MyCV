const config = require('../config');
const { getDatabase } = require('./index');
const { runMigrations } = require('./migrate');

function seedDatabase(force = false) {
  // Ensure tables exist
  runMigrations(config.env);

  const db = getDatabase();
  console.log(`[SEEDER] Running database seed for environment: [${config.env.toUpperCase()}]`);

  if (config.isUAT || force) {
    console.log('[SEEDER] Populating UAT mock data for QA & Staging testing...');
    
    // Check if contacts already seeded
    const countRow = db.prepare('SELECT COUNT(*) as count FROM contacts').get();
    if (countRow.count === 0 || force) {
      if (force) {
        db.exec('DELETE FROM contacts; DELETE FROM visitors; DELETE FROM cv_downloads;');
      }

      const insertContact = db.prepare(`
        INSERT INTO contacts (name, email, phone, company, subject, message, environment, status, is_read, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now', ?))
      `);

      insertContact.run(
        'Nguyễn Văn An (HR Manager)',
        'an.nguyen@fpt-software.mock',
        '0901234567',
        'FPT Software Staging Team',
        'Trao đổi cơ hội Network System Administrator',
        'Chào Tuấn, mình xem qua CV thấy bạn có kinh nghiệm cấu hình Router Cisco 1841, DrayTek và Firewall Fortinet rất phù hợp với dự án bên mình. Tuần tới bên mình có thể trao đổi online 15 phút không?',
        'uat',
        'NEW',
        0,
        '-1 hours'
      );

      insertContact.run(
        'QA Tester Lead',
        'qa.test@company.uat',
        '0988776655',
        'Enterprise QA Lab',
        '[UAT TEST] Kiểm thử tính năng gửi form liên hệ',
        'Đây là tin nhắn mẫu tự động trong môi trường UAT để Tester kiểm tra luồng nhận thông báo và quản lý tin nhắn.',
        'uat',
        'REVIEWED',
        1,
        '-2 days'
      );

      // Seed mock analytics
      const insertVisitor = db.prepare(`
        INSERT INTO visitors (ip_hash, user_agent, referer, page_viewed, environment, created_at)
        VALUES (?, ?, ?, ?, ?, datetime('now', ?))
      `);
      insertVisitor.run('uat_hash_1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'https://linkedin.com', '/', 'uat', '-3 hours');
      insertVisitor.run('uat_hash_2', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 'https://topcv.vn', '/', 'uat', '-1 hours');

      const insertDownload = db.prepare(`
        INSERT INTO cv_downloads (ip_hash, format, environment, downloaded_at)
        VALUES (?, ?, ?, datetime('now', ?))
      `);
      insertDownload.run('uat_hash_1', 'PDF', 'uat', '-2 hours');

      console.log('[SEEDER] UAT mock data successfully seeded!');
    } else {
      console.log(`[SEEDER] UAT already has ${countRow.count} contacts, skipping seed.`);
    }
  } else {
    console.log('[SEEDER] Production environment: Initializing system audit log only.');
    const insertLog = db.prepare(`
      INSERT INTO system_logs (level, message, meta, environment)
      VALUES (?, ?, ?, ?)
    `);
    insertLog.run('INFO', 'Production database initialized successfully', JSON.stringify({ version: config.appVersion }), 'production');
  }

  console.log('[SEEDER] Completed successfully.');
}

if (require.main === module) {
  try {
    const isForce = process.argv.includes('--force');
    seedDatabase(isForce);
  } catch (error) {
    console.error('[SEEDER_ERROR]', error);
    process.exit(1);
  }
}

module.exports = { seedDatabase };
