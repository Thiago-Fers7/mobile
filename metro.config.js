const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push('sql');

// const config = {
//   resolver: {
//     // Adicione 'sql' na lista de extensões de código
//     sourceExts: [...defaultConfig.resolver.sourceExts, 'sql'],
//     // Opcional: Adicione 'db' se planeja enviar um banco pré-populado
//     assetExts: [...defaultConfig.resolver.assetExts, 'db'],
//   },
// };

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
