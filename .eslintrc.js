module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'react-app',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest', '@typescript-eslint'],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-use-before-define': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'quote-props': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 0,
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    quotes: ['error', 'single'],
    'import/no-anonymous-default-export': 0
    // 'default-case': 'off',
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
