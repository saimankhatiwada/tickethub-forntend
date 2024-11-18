import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/dist', '**/.eslintrc.cjs'],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ),
  ),
  {
    plugins: {
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        module: true,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      react: {
        version: '18.3',
      },
    },

    rules: {
      'react/prop-types': 'off',
      'react-refresh/only-export-components': 'off',
      'react/no-unescaped-entities': 'off',
      'no-unused-vars': 'off',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^@?\\w'],
            ['^@/'],
            ['^\\.\\./', '^\\./'],
            ['^.+\\.?(css)$'],
          ],
        },
      ],
    },
  },
];
