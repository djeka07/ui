import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export const vitePlugins = [
  svgr(),
  vanillaExtractPlugin(),
  tsconfigPaths(),
]