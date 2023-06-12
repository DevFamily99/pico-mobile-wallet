module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "nativewind/babel",
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: ['EOS_SERVER_URL,EOS_PRIVATE_KEY'],
        safe: false,
        allowUndefined: true,
      }
    ],
  ],
};
