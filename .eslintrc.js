module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
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
    'prettier/prettier': ['error'],
    'import/no-unresolved': 'error',
    'import/named': 'error',
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
