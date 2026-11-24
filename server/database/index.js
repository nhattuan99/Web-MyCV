const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');
const config = require('../config');

let dbInstance = null;

function getDatabase(customPath = null) {
  if (dbInstance && !customPath) {
    return dbInstance;
  }

  const dbFilePath = customPath || config.database.path;
  const dbDir = path.dirname(dbFilePath);

  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  const db = new DatabaseSync(dbFilePath);
  
  // Enterprise SQLite Performance & Integrity pragmas
  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA synchronous = NORMAL;
    PRAGMA foreign_keys = ON;
  `);

  if (!customPath) {
    dbInstance = db;
  }

  return db;
}

// Helper methods with standard signatures
const dbHelper = {
  get db() {
    return getDatabase();
  },

  exec(sql) {
    return getDatabase().exec(sql);
  },

  query(sql, params = []) {
    const stmt = getDatabase().prepare(sql);
    return stmt.all(...params);
  },

  get(sql, params = []) {
    const stmt = getDatabase().prepare(sql);
    return stmt.get(...params);
  },

  run(sql, params = []) {
    const stmt = getDatabase().prepare(sql);
    const result = stmt.run(...params);
    return {
      changes: result.changes,
      lastInsertRowid: Number(result.lastInsertRowid)
    };
  },

  close() {
    if (dbInstance) {
      dbInstance.close();
      dbInstance = null;
    }
  }
};

module.exports = dbHelper;
module.exports.getDatabase = getDatabase;
