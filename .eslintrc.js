module.exports = {
  root: true,
  ignorePatterns: ['/nodejs-assets/nodejs-project/'],
  env: {
    node: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 'off',
        'require-jsdoc': 0,
        'linebreak-style': 0,
        'max-len': [
          'error',
          {code: 120},
        ],
      },
    },
  ],
};
