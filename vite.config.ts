import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import preserveDirectives from 'rollup-preserve-directives';

export default defineConfig({
  plugins: [
    preserveDirectives(),
    react(),
    svgr({ include: '**/*.svg' }),
    dts({ include: 'src', exclude: ['**/*.stories.tsx'], insertTypesEntry: true }),
    { ...libInjectCss(), enforce: 'pre' },
    tsconfigPaths(),
    vanillaExtractPlugin(),
    {
      name: 'test',
      generateBundle: (_, bundle) => {
        console.log(Object.values(bundle));
      },
    },
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      formats: ['es'],
      fileName: 'ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion', 'polished'],
      output: {
        preserveModules: false,
        inlineDynamicImports: false,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'framer-motion': 'framer-motion',
          polished: 'polished',
        },
      },
    },
  },
});
