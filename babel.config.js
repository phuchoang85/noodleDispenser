module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@Src': './src',
          '@Image': './src/assets/images',
          '@Assets': './src/assets',
          '@Components': './src/components',
          '@Contants': './src/contants',
          '@Pages': './src/pages',
          '@Redux': './src/redux',
        },
      },
    ],
  ],
};
