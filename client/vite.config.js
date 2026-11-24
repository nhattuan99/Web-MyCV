import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  const isUAT = mode === 'uat';
  const defaultPort = isUAT ? 3001 : 3000;

  return {
    plugins: [react()],
    server: {
      port: defaultPort,
      host: '0.0.0.0',
      open: false,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: isUAT, // Enable sourcemaps for UAT/debugging
      minify: !isUAT ? 'esbuild' : false, // Enterprise clean code vs production minified
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV || mode),
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION || '1.0.0'),
    }
  };
});
