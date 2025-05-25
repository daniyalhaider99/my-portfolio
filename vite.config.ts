import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
    },
    build: {
      outDir: mode === 'staging' ? 'dist/staging' : 'dist',
      sourcemap: mode === 'staging',
    },
  }
})
