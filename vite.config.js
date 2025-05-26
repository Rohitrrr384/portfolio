import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser'; // For JavaScript minification

export default defineConfig({
  plugins: [
    react(),
    process.env.NODE_ENV === "production" && terser(),
  ],

  build: {
    minify: "terser",
    cssCodeSplit: true,
    rollupOptions: {
      plugins: [terser()],
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
    ],
  },
});
