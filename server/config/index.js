const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// Determine environment
const targetEnv = (process.env.NODE_ENV || process.env.APP_ENV || 'uat').toLowerCase();
const envFile = targetEnv === 'production' || targetEnv === 'prod' ? '.env.production' : '.env.uat';
const envPath = path.resolve(__dirname, '..', envFile);

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  // Fallback to default .env if present
  dotenv.config();
}

const config = {
  env: process.env.NODE_ENV || targetEnv,
  isProduction: (process.env.NODE_ENV || targetEnv) === 'production',
  isUAT: (process.env.NODE_ENV || targetEnv) === 'uat',
  port: parseInt(process.env.PORT, 10) || (targetEnv === 'production' ? 4000 : 4001),
  host: process.env.HOST || '0.0.0.0',
  appName: process.env.APP_NAME || 'CV_Backend_API',
  appVersion: process.env.APP_VERSION || '1.0.0',
  logLevel: process.env.LOG_LEVEL || (targetEnv === 'production' ? 'info' : 'debug'),
  enableTestTools: process.env.ENABLE_TEST_TOOLS === 'true',
  adminSecretKey: process.env.ADMIN_SECRET_KEY || 'default-secret-key-change-in-prod',
  
  cors: {
    origin: (process.env.CORS_ORIGIN || 'http://localhost:3000,http://localhost:3001')
      .split(',')
      .map(s => s.trim()),
    credentials: true
  },

  database: {
    type: process.env.DB_TYPE || 'sqlite',
    path: path.resolve(__dirname, '..', process.env.DB_PATH || (targetEnv === 'production' ? '../data/prod/cv_prod.sqlite' : '../data/uat/cv_uat.sqlite'))
  },

  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || (targetEnv === 'production' ? 60 : 500)
  }
};

module.exports = config;
