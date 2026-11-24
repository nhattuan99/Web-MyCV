-- ==============================================================================
-- Migration: 001_init.sql
-- Description: Core Schema for CV Portal (Contacts, Inquiries, Analytics, Logs)
-- ==============================================================================

-- Schema migrations tracker
CREATE TABLE IF NOT EXISTS schema_migrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  version TEXT NOT NULL UNIQUE,
  applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Contact Inquiries Table
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  environment TEXT NOT NULL,
  status TEXT DEFAULT 'NEW',
  is_read INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Website Traffic & Analytics Table
CREATE TABLE IF NOT EXISTS visitors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip_hash TEXT NOT NULL,
  user_agent TEXT,
  referer TEXT,
  page_viewed TEXT DEFAULT '/',
  environment TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CV Resume Download Events Table
CREATE TABLE IF NOT EXISTS cv_downloads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip_hash TEXT NOT NULL,
  format TEXT DEFAULT 'PDF',
  environment TEXT NOT NULL,
  downloaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- System Audit / Activity Log Table
CREATE TABLE IF NOT EXISTS system_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  level TEXT NOT NULL,
  message TEXT NOT NULL,
  meta TEXT,
  environment TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
