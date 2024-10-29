module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@app': './src',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.native.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
        ],
      },
    ],
  ],
};
