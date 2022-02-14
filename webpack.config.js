//webpack.config.js

const path = require("path");

module.exports = {
  entry: {
    index: path.join(__dirname, "src", "index.js"),
  },
  output: {
    path: path.join(__dirname, "js"),
    publicPath: "./js/",
    filename: "index.js",
  },
  devtool: "source-map",
  target: "web",
  module: {
    rules: [
      {
        test: /.js$/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [],
  mode: "development",
  devServer: {
    static: "./",
    hot: true,
    open: true,
  },
};
