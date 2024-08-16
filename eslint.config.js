import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import'; 
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "indent": ["error", 2],
      "quotes": ["off", "single"],
      "semi": ["error", "always"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "no-multi-spaces": "error",
      "comma-dangle": ["error", "always-multiline"], 
      "object-curly-spacing": ["error", "always"], 
      "space-in-parens": ["error", "never"],
      "computed-property-spacing": ["error", "never"], 
      "comma-spacing": ["error", { "before": false, "after": true }],
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "off", // Checks effect dependencies
      "react/react-in-jsx-scope": "off", 
      "no-unused-vars": "off",
      "no-console": "warn",
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "parent", "sibling", "index"], // import 되는 순서 정의
          "pathGroups": [
            {
              "pattern": "react*", // path가 react로 시작하면
              "group": "external", // external 앞에
              "position": "before",
            },
          ],
          "alphabetize": {
            //group 내부에서 알파벳 오름차순으로 정렬
            "order": "asc",
            "caseInsensitive": true,
          },
          // group들 사이마다 개행 적용 (group 내부에서 개행 적용 불가)
          "newlines-between": "always", 
        },
      ],
    },
  },
];
