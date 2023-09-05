const path = require('path');
const pak = require('../../packages/testmodule/package.json');

module.exports = {
  dependencies: {
    [pak.name]: {
      root: path.join(__dirname, '..', '..', 'packages', 'testmodule'),
    },
  },
};
