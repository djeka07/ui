// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import svgr from '@svgr/rollup';

const packageJson = require("./package.json");

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: "src/molecyles/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      svgr({ native: true, titleProp: true }),
      vanillaExtractPlugin(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/molecyles/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [svgr({ native: true, titleProp: true }),dts()],
  },
];

