module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['warn'],
    'import/no-unresolved': 'error',
    'import/named': 'error',
    eqeqeq: 'warn',
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }],
    'no-console': 'warn',
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-var': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
