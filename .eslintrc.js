module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module"
  },
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["vue", "prettier"],
  globals: {
    require: true,
    module: true
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        quoteProps: "preserve",
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: true,
        endOfLine: "auto"
      }
    ],
    "vue/multi-word-component-names": 0
  }
};
