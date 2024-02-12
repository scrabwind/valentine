/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    extraFileExtensions: [".vue"],
    project: "./tsconfig.app.json"
  },
  parser: "vue-eslint-parser",
  rules: {
    "import/prefer-default-export": "off"
  },
  plugins: ["vue"],
  ignorePatterns: ["node_modules", "assets", "vite.config.ts", "*.js"]
};
