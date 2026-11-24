const config = require('../config');

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  
  const errorResponse = {
    success: false,
    environment: config.env,
    error: {
      message: err.message || 'Internal Server Error',
      code: err.code || 'INTERNAL_ERROR',
      ...(config.isUAT && { stack: err.stack }) // Only expose stack traces in UAT/Staging
    }
  };

  if (statusCode >= 500) {
    console.error(`[SERVER_ERROR] [${config.env.toUpperCase()}]`, err);
  }

  res.status(statusCode).json(errorResponse);
}

module.exports = { errorHandler };
