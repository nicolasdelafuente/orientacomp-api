const globals = require('globals');
const pluginJs = require('@eslint/js');
const eslintPluginPrettier = require('eslint-plugin-prettier/recommended');

module.exports = [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  { ignores: ['node_modules/'] },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  {
    rules: {
      'capitalized-comments': ['error', 'always'],
    },
  },
];
