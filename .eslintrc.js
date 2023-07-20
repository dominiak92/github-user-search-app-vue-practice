module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: ['airbnb-base', 'plugin:vue/recommended', 'prettier'],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      // Dodaj własne reguły lub zmodyfikuj reguły ESLint według potrzeb
      // np. "no-console": "off" // wyłączanie ostrzeżenia o użyciu console.log
    },
  };