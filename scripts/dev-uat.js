const { spawn } = require('child_process');
const path = require('path');

console.log('================================================================');
console.log('  KHOI CHAY MOI TRUONG: [UAT / STAGING]');
console.log('  Frontend: http://localhost:3001');
console.log('  Backend : http://localhost:4001');
console.log('  Database: data/uat/cv_uat.sqlite');
console.log('================================================================\n');

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';

// Start Server in UAT mode
const serverProcess = spawn(npmCmd, ['run', 'dev:uat'], {
  cwd: path.resolve(__dirname, '..', 'server'),
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NODE_ENV: 'uat' }
});

// Start Client in UAT mode
const clientProcess = spawn(npmCmd, ['run', 'dev:uat'], {
  cwd: path.resolve(__dirname, '..', 'client'),
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, VITE_APP_ENV: 'UAT' }
});

const cleanup = () => {
  console.log('\nDang dung cac tien trinh UAT...');
  serverProcess.kill();
  clientProcess.kill();
  process.exit(0);
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
