/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
// import preserveDirectives from 'rollup-preserve-directives';

export default defineConfig({
  plugins: [
    // preserveDirectives({ exclude: ["**/*.css.ts"]}),
    react(),
    svgr({ include: '**/*.svg' }),
    dts({ include: 'src', exclude: ['**/*.stories.tsx'], insertTypesEntry: true, rollupTypes: true }),
    { ...libInjectCss(), enforce: 'pre' },
    tsconfigPaths(),
    vanillaExtractPlugin({ unstable_mode: 'emitCss'}),
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
      external: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion', 'polished', '@djeka07/utils', '@djeka07/hooks'],
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
        },
      },
    },
  },
});
