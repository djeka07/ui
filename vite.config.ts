import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const vitePlugins = [svgr({ include: '**/*.svg' }), vanillaExtractPlugin(), tsconfigPaths()];

export default defineConfig({
  plugins: vitePlugins,
});
