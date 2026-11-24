const morgan = require('morgan');
const config = require('../config');

// Standard enterprise format with request duration, status, IP, environment
const enterpriseLogFormat = config.isProduction
  ? ':remote-addr - [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms'
  : 'dev';

const requestLogger = morgan(enterpriseLogFormat);

module.exports = { requestLogger };
