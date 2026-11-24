const config = require('../config');
const db = require('../database');

function getHealth(req, res) {
  let dbStatus = 'CONNECTED';
  try {
    const result = db.get('SELECT 1 as test');
    if (!result || result.test !== 1) {
      dbStatus = 'DEGRADED';
    }
  } catch (err) {
    dbStatus = 'DISCONNECTED';
  }

  const memoryUsage = process.memoryUsage();

  res.status(dbStatus === 'DISCONNECTED' ? 503 : 200).json({
    status: dbStatus === 'DISCONNECTED' ? 'DOWN' : 'UP',
    environment: config.env,
    appName: config.appName,
    version: config.appVersion,
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    database: {
      status: dbStatus,
      type: config.database.type,
      storage: config.database.path
    },
    system: {
      nodeVersion: process.version,
      memoryRssMB: Math.round(memoryUsage.rss / 1024 / 1024),
      heapUsedMB: Math.round(memoryUsage.heapUsed / 1024 / 1024)
    }
  });
}

module.exports = { getHealth };
