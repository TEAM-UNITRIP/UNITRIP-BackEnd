import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      'no-multi-spaces': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'parent', 'sibling', 'index'], // import 되는 순서 정의
          'pathGroups': [
            {
              'pattern': 'react*', // path가 react로 시작하면
              'group': 'external', // external 앞에
              'position': 'before',
            },
          ],
          'alphabetize': {
            // group 내부에서 알파벳 오름차순으로 정렬
            'order': 'asc',
            'caseInsensitive': true,
          },
          // group들 사이마다 개행 적용 (group 내부에서 개행 적용 불가)
          'newlines-between': 'always',
        },
      ],
    },
  },
];
