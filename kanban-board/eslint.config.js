module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends:[
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.app.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins:['react', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/function-component-definition':[
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
};