const path = require('path');
const pak = require('../../packages/testmodule/package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '..', '..', 'packages', 'testmodule', pak.source),
        },
      },
    ],
  ],
};
