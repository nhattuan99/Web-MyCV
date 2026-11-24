const config = require('../config');
const { seedDatabase } = require('../database/seed');

function resetUatData(req, res, next) {
  if (!config.enableTestTools) {
    return res.status(403).json({
      success: false,
      error: { message: 'Test utilities are disabled in this environment.', code: 'FORBIDDEN_ENV' }
    });
  }

  try {
    seedDatabase(true); // Force reseed
    return res.json({
      success: true,
      environment: config.env,
      message: 'UAT Database has been reset with clean test fixtures.'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { resetUatData };
