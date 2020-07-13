const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './demo/dist'),
  chainWebpack: (config) => {
    config.entry('app').clear().add('./demo/main.js').end();
    config.resolve.alias.set('@', path.join(__dirname, './demo'));
  },
};
