const fs = require('fs');
const path = require('path');
const config = require('../config');
const { getDatabase } = require('./index');

function runMigrations(targetEnv = config.env) {
  console.log(`[MIGRATION] Running migrations for environment: [${targetEnv.toUpperCase()}]`);
  const db = getDatabase();

  const migrationsDir = path.resolve(__dirname, 'migrations');
  const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();

  // Create schema_migrations table first if not exists
  db.exec(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      version TEXT NOT NULL UNIQUE,
      applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  for (const file of files) {
    const version = file;
    const stmt = db.prepare('SELECT id FROM schema_migrations WHERE version = ?');
    const existing = stmt.get(version);

    if (!existing) {
      console.log(`[MIGRATION] Applying migration: ${file}`);
      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      db.exec(sql);
      
      const insert = db.prepare('INSERT INTO schema_migrations (version) VALUES (?)');
      insert.run(version);
      console.log(`[MIGRATION] Successfully applied: ${file}`);
    } else {
      console.log(`[MIGRATION] Already applied: ${file}`);
    }
  }

  console.log(`[MIGRATION] All migrations completed for [${targetEnv.toUpperCase()}].`);
}

if (require.main === module) {
  try {
    runMigrations();
  } catch (error) {
    console.error('[MIGRATION_ERROR]', error);
    process.exit(1);
  }
}

module.exports = { runMigrations };
