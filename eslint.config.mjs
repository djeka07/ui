import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import { default as jsLint } from '@eslint/js';
import eslintPluginImport from "eslint-plugin-import";
import importRecommendedConfig from "eslint-plugin-import/config/recommended.js";
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tsLint from "typescript-eslint";
import importPlugin from 'eslint-plugin-import';
import importRecommented from 'eslint-plugin-import/config/recommended.js';

const flatCompat = new FlatCompat();

export default [
  { ignores: ["**/*.{mjs,cjs,js,d.ts,d.mts}", "./.storybook/main.ts"] },
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      import: fixupPluginRules(importPlugin),
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs'],
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
    rules: {
      ...importRecommented.rules,
      'import/no-named-as-default-member': 'off',
      'import/namespace': 'off',
      'import/named': 'off'
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react": eslintReact,
    },
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'jsx-a11y': pluginJsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: pluginJsxA11y.configs.recommended.rules,
  },
  {
      plugins: {
          "react-hooks": reactHooks,
      },
      rules: {
          ...reactHooks.configs.recommended.rules
      }
  }
]

// export default [
//   ...compat.extends('plugin:import/typescript', 'eslint:recommended', 'plugin:prettier/recommended'),
//   {
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.commonjs,
//       },
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//   },
//   ...fixupConfigRules(
//     compat.extends(
//       'plugin:react/recommended',
//       'plugin:react/jsx-runtime',
//       'plugin:react-hooks/recommended',
//       'plugin:jsx-a11y/recommended',
//     ),
//   ).map((config) => ({
//     ...config,
//     files: ['**/*.{js,jsx,ts,tsx}'],
//   })),
//   {
//     files: ['**/*.{js,jsx,ts,tsx}'],

//     plugins: {
//       react: fixupPluginRules(react),
//       'jsx-a11y': fixupPluginRules(jsxA11Y),
//     },

//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },

//     rules: {
//       'react/prop-types': 'off',
//     },
//   },
//   ...fixupConfigRules(
//     compat.extends('plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'),
//   ).map((config) => ({
//     ...config,
//     files: ['**/*.{ts,tsx}'],
//   })),
//   {
//     files: ['**/*.{ts,tsx}'],

//     plugins: {
//       '@typescript-eslint': fixupPluginRules(typescriptEslint),
//       prettier,
//       import: fixupPluginRules(_import),
//     },

//     languageOptions: {
//       parser: tsParser,
//     },
//   },
// ];
