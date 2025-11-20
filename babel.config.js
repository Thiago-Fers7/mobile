module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    // O plugin e suas opções devem estar dentro de um array
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          // A chave não usa '*', e o valor é o caminho completo a partir da raiz do projeto
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@services': './src/services',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@types': './src/@types',
          '@theme': './src/styles/theme',
        },
      },
    ],
  ],
};