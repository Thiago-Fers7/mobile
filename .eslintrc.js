module.exports = {
  // Indica que este é o arquivo de configuração raiz
  root: true,

  // Ambientes de execução (configura globais como 'browser', 'node', etc.)
  env: {
    es2021: true,
    node: true,
    "react-native/react-native": true, // Adiciona globais do React Native
  },

  // Configurações base que estamos estendendo
  extends: [
    "@react-native",
    "plugin:@typescript-eslint/recommended", // Regras recomendadas para TypeScript
    "prettier", // Integração com Prettier (desativa regras que conflitam)
  ],

  // O parser que o ESLint usará para entender o código TypeScript
  parser: "@typescript-eslint/parser",

  // Opções do parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Habilita o parsing de JSX
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  // Plugins que estamos usando
  plugins: [
    "@typescript-eslint",
    "react",
    "react-native",
    "prettier",
    "simple-import-sort",
  ],

  // Regras customizadas. Elas sobrescrevem as regras dos 'extends'.
  rules: {
    // Regra do Prettier
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    
    // Regras de estilo de código
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],

    // Regras de ordenação de imports
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // Regras do React que você desativou
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",

    // Regra do React Native que você desativou
    "react-native/no-inline-styles": "off",
    "react/jsx-max-props-per-line": ["error", { "maximum": 3 }],
    "@typescript-eslint/no-unused-vars": ["warn"],
  },

  // Padrões de arquivos a serem ignorados pelo ESLint
  ignorePatterns: ["node_modules/", "build/", "dist/", ".expo/", "android/", "ios/", "babel.config.js", "metro.config.js"],
};