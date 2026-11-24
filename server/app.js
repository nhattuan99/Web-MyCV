const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const config = require('./config');
const { requestLogger } = require('./middleware/logger');
const { errorHandler } = require('./middleware/errorHandler');
const apiRoutes = require('./routes/api');

const app = express();

// Trust proxy for reverse proxies (Nginx / Cloudflare / Ingress)
app.set('trust proxy', 1);

// Security Headers
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: false // Allow modern frontend assets
}));

// CORS Setup according to environment
app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser requests or whitelisted origins
    if (!origin || config.cors.origin.includes(origin) || config.isUAT) {
      callback(null, true);
    } else {
      callback(new Error(`CORS origin [${origin}] not permitted in ${config.env}`));
    }
  },
  credentials: true
}));

// Body Parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Logging
app.use(requestLogger);

// Mount API routes
app.use('/api', apiRoutes);

// Optional: Serve static build of frontend in standalone production mode
const clientBuildPath = path.resolve(__dirname, '../client/dist');
app.use(express.static(clientBuildPath));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  const indexFile = path.join(clientBuildPath, 'index.html');
  res.sendFile(indexFile, (err) => {
    if (err) {
      res.status(200).json({
        message: `Lê Quang Nhật Tuấn CV API Server [${config.env.toUpperCase()}] is active.`,
        docs: '/api/health'
      });
    }
  });
});

// Centralized Error Handling
app.use(errorHandler);

module.exports = app;
