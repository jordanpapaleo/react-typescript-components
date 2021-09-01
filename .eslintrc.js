module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest', 'react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended', 'plugin:mdx/overrides'],
    },
  ],
}
