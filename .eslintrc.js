module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:vue/recommended', 'prettier/vue'],
  plugins: ['prettier'],
  rules: {
    'no-underscore-dangle': ['off', { 'allowAfterThis': true }],
    'prettier/prettier': 'error',
  },
};
