import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: '/new/',  // Убедитесь, что base путь правильный
    server: {
        port: 49942,
    },
    build: {
        outDir: 'dist'
    }
});
