import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: [
      '@supabase/supabase-js',
      '@supabase/postgrest-js',
      '@supabase/realtime-js',
      '@supabase/gotrue-js',
      '@supabase/storage-js'
    ]
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  define: {
    global: 'globalThis'
  }
})