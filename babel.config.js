module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        safe: true,
        allowUndefined: false
      }
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@tests': ['./tests/'],
          '@': './src/'
        }
      }
    ]
  ]
};
