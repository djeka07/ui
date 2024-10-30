/// <reference types="vite/client" />
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { sync } from 'glob';
import { copyFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import preserveDirectives from 'rollup-preserve-directives';

const input = Object.fromEntries([
  ['index', 'src/index.ts'],
  ...sync('src/components/*/*/index.ts').map((componentPath) => {
    const [, componentName, component] = componentPath.match(/.*components\/(.*)\/.*?/) || [];
    console.log(componentName, component, componentPath);
    return [componentName, componentPath];
  }),
]);

console.log(input);

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
    // libInjectCss(),
    svgr({ include: '**/*.svg' }),
    dts({
      include: 'src',
      exclude: ['**/*.stories.tsx'],
      insertTypesEntry: true,
      rollupTypes: true,
      // afterBuild: () => {
      //   copyFileSync('dist/index.d.cts', 'dist/index.d.mts');
      // },
    }),
    tsconfigPaths(),
    vanillaExtractPlugin({ unstable_mode: 'emitCss' }),
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
        'polished',
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
          polished: 'polished',
          '@djeka07/utils': '@djeka07/utils',
          '@djeka07/hooks': '@djeka07/hooks',
          '@djeka07/dates': '@djeka07/dates',
        },
      },
    },
  },
});
