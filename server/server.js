const app = require('./app');
const config = require('./config');
const { runMigrations } = require('./database/migrate');
const { seedDatabase } = require('./database/seed');

async function bootstrap() {
  try {
    console.log(`=======================================================`);
    console.log(` Starting ${config.appName} v${config.appVersion}`);
    console.log(` Environment : [${config.env.toUpperCase()}]`);
    console.log(` Database    : ${config.database.path}`);
    console.log(`=======================================================`);

    // Run database migrations on startup
    runMigrations(config.env);

    // Run seed if UAT or empty
    seedDatabase(false);

    const server = app.listen(config.port, config.host, () => {
      console.log(`🚀 [${config.env.toUpperCase()}] Server running at http://${config.host}:${config.port}`);
      console.log(`🩺 Health check available at: http://localhost:${config.port}/api/health`);
    });

    // Graceful Shutdown for Enterprise Zero-downtime Deployments
    const shutdown = (signal) => {
      console.log(`\nReceived ${signal}. Shutting down gracefully...`);
      server.close(() => {
        console.log('HTTP server closed.');
        const db = require('./database');
        db.close();
        console.log('Database connections terminated.');
        process.exit(0);
      });

      // Force terminate if graceful takes too long
      setTimeout(() => {
        console.error('Forceful termination after 10s timeout.');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));

  } catch (error) {
    console.error('Fatal initialization error:', error);
    process.exit(1);
  }
}

bootstrap();
