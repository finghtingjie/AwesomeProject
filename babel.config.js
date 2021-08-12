module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          '@src': './src',
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@iconfont': './src/iconfont',
          '@page': './src/page',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
