import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    strictPort: false,
    proxy: {
      // 仅用于本地开发预览线上真实数据，浏览器实际请求同源地址，避免 CORS。
      // 正式部署建议运行 npm run download:data，把数据落到 public/data。
      '/__shiyun_data': {
        target: 'https://shiyun.cohenjikan.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/__shiyun_data/, '/data'),
      },
    },
  },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 1600,
  },
});
