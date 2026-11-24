const rateLimit = require('express-rate-limit');
const config = require('../config');

// Standard API rate limiter
const apiLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    environment: config.env,
    error: {
      message: 'Too many requests from this IP, please try again later.',
      code: 'RATE_LIMIT_EXCEEDED'
    }
  }
});

// Stricter rate limiter specifically for contact form spam protection
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: config.isProduction ? 5 : 50, // 5 submissions per 15 min in prod, 50 in UAT
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    environment: config.env,
    error: {
      message: 'Contact form rate limit reached. Please wait before submitting another message.',
      code: 'CONTACT_LIMIT_EXCEEDED'
    }
  }
});

module.exports = { apiLimiter, contactFormLimiter };
