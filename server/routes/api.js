const express = require('express');
const router = express.Router();

const { getHealth } = require('../controllers/healthController');
const { createContact, getContacts, deleteContact } = require('../controllers/contactController');
const { recordVisit, recordDownloadCv, getSummary } = require('../controllers/analyticsController');
const { resetUatData } = require('../controllers/uatTestController');

const { apiLimiter, contactFormLimiter } = require('../middleware/rateLimiter');
const { requireAdminAuth } = require('../middleware/authMiddleware');

// Health Check
router.get('/health', getHealth);

// Contact Inquiries
router.post('/contacts', contactFormLimiter, createContact);
router.get('/contacts', requireAdminAuth, getContacts);
router.delete('/contacts/:id', requireAdminAuth, deleteContact);

// Analytics & Metrics
router.post('/analytics/visit', apiLimiter, recordVisit);
router.post('/analytics/download-cv', apiLimiter, recordDownloadCv);
router.get('/analytics/summary', apiLimiter, getSummary);

// UAT QA Helpers (Only available in UAT)
router.post('/uat/reset', resetUatData);

module.exports = router;
