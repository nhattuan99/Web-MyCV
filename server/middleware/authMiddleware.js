const config = require('../config');

function requireAdminAuth(req, res, next) {
  // In UAT environment, allow previewing messages if header or query param is provided,
  // or allow open read for QA testing convenience if configured.
  const providedKey = req.headers['x-admin-key'] || req.query.admin_key;
  
  if (config.isUAT && !providedKey) {
    // In UAT, allow QA testers to inspect contacts easily
    return next();
  }

  if (providedKey === config.adminSecretKey) {
    return next();
  }

  return res.status(401).json({
    success: false,
    environment: config.env,
    error: {
      message: 'Unauthorized: Valid x-admin-key required.',
      code: 'UNAUTHORIZED'
    }
  });
}

module.exports = { requireAdminAuth };
