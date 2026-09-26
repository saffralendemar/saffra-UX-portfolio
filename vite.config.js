import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Case-study artwork is large Figma-generated JSX; it is split per route (see src/content/projects).
    chunkSizeWarningLimit: 1500,
  },
});
