import js from '@eslint/js'
import globals from 'globals'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { js: true },
        sourceType: 'module',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
]
