import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'unplugin-dts/vite';

export default defineConfig({
  plugins: [react(), dts({ include: 'src' })],
  build: {
    target: ['es2020', 'safari15'],
    cssTarget: ['safari15'],
    lib: {
      entry: 'src/components/index.ts',
      formats: ['es', 'cjs'],
    },
    rolldownOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
    },
  },
});
