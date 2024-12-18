/// <reference types="vite/client" />
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { globSync } from 'glob';
import { defineConfig, Plugin } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import preserveDirectives from 'rollup-preserve-directives';
import { copyFileSync } from 'node:fs';

const input = Object.fromEntries([
  ['index', 'src/index.ts'],
  ['styles', 'src/styles/index.ts'],
  ...globSync('src/components/*/*/index.ts').map((componentPath) => {
    const [, componentName] = componentPath.match(/.*components\/(.*)\/.*?/) || [];
    return [componentName, componentPath];
  }),
]);

const renameFile = (info) => {
  let name = info.name;
  if (name !== 'index') {
    name = `_internal/${name}`;
  }
  return `${name}.mjs`;
};

export default defineConfig({
  plugins: [
    preserveDirectives() as Plugin,
    react(),
    svgr({ include: '**/*.svg' }),
    dts({
      include: 'src',
      exclude: ['**/*.stories.tsx'],
      insertTypesEntry: true,
      rollupTypes: true,
      afterBuild: () => {
        copyFileSync('dist/index.d.ts', 'dist/index.d.mts');
      },
    }),
    tsconfigPaths(),
    vanillaExtractPlugin(),
  ],
  build: {
    copyPublicDir: false,
    minify: true,
    lib: {
      entry: input,
      formats: ['es'],
      fileName: '[name]',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'framer-motion',
        '@djeka07/utils',
        '@djeka07/hooks',
        '@djeka07/dates',
      ],
      output: {
        preserveModules: false,
        chunkFileNames: renameFile,
        entryFileNames: renameFile,
        inlineDynamicImports: false,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'framer-motion': 'framer-motion',
          '@djeka07/utils': '@djeka07/utils',
          '@djeka07/hooks': '@djeka07/hooks',
          '@djeka07/dates': '@djeka07/dates',
        },
      },
    },
  },
});
