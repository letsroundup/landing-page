module.exports = {
  extends: 'airbnb',
  globals: {
    __DEV__: true,
    ll: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-use-before-define': [2, 'nofunc'],
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
  },
};
