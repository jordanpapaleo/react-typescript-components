module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
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
  plugins: ['jest', 'react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    camelcase: ['error', { ignoreDestructuring: true, properties: 'never' }],
    'comma-dangle': ['error', 'always-multiline'],
    'default-case': 'off',
    'flowtype/require-valid-file-annotation': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'quote-props': 'off',
    quotes: ['error', 'single'],
    'react-hooks/exhaustive-deps': 0,
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
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
