var path = require('path');

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./"
  }
};
