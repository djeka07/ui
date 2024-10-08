/// <reference types="vite/client" />
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig, Plugin } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    preserveDirectives() as Plugin,
    react(),
    libInjectCss(),
    svgr({ include: '**/*.svg' }),
    dts({ include: 'src', exclude: ['**/*.stories.tsx'], insertTypesEntry: true, rollupTypes: true }),
    tsconfigPaths(),
    vanillaExtractPlugin({ unstable_mode: 'emitCss' }),
  ],
  build: {
    copyPublicDir: false,
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: '[name]',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'framer-motion',
        'polished',
        '@djeka07/utils',
        '@djeka07/hooks',
        '@djeka07/dates',
      ],
      output: {
        preserveModules: false,
        inlineDynamicImports: false,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'framer-motion': 'framer-motion',
          polished: 'polished',
          '@djeka07/utils': '@djeka07/utils',
          '@djeka07/hooks': '@djeka07/hooks',
          '@djeka07/dates': '@djeka07/dates',
        },
      },
    },
  },
});
