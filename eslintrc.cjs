module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  overrides: [],
  // 配置解析vue文件
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  // 添加规则
  rules: {
    semi: [2, 'always'],
    eqeqeq: [2, 'allow-null'],
    camelcase: 'warn',
    quotes: [2, 'single'],
    'quote-props': 0,
    'prefer-const': 1,
    'no-const-assign': 2,
    'no-label-var': 'error',
    'eol-last': 2,
    'no-var': 'error',
    'no-return-assign': 'warn',
    'array-bracket-spacing': 'warn',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
};
