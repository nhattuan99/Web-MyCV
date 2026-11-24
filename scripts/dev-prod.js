const { spawn } = require('child_process');
const path = require('path');

console.log('================================================================');
console.log('  KHOI CHAY MOI TRUONG: [PRODUCTION]');
console.log('  Frontend: http://localhost:3000');
console.log('  Backend : http://localhost:4000');
console.log('  Database: data/prod/cv_prod.sqlite');
console.log('================================================================\n');

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';

// Start Server in Production mode
const serverProcess = spawn(npmCmd, ['run', 'dev:prod'], {
  cwd: path.resolve(__dirname, '..', 'server'),
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NODE_ENV: 'production' }
});

// Start Client in Production mode
const clientProcess = spawn(npmCmd, ['run', 'dev:prod'], {
  cwd: path.resolve(__dirname, '..', 'client'),
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, VITE_APP_ENV: 'Production' }
});

const cleanup = () => {
  console.log('\nDang dung cac tien trinh Production...');
  serverProcess.kill();
  clientProcess.kill();
  process.exit(0);
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
