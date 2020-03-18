path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src') + 'index.js',
  output: {
    webassemblyModuleFilename: "[hash].wasm",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: "webassembly/async"
      }
    ]
  },
  optimization: {
    chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
  },
  experiments: {
    asyncWebAssembly: true,
    importAwait: true
  }
};