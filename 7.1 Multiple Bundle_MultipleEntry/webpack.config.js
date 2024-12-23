const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
    product: "./src/products.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      chunks: ["index"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/products.html"),
      filename: "products.html",
      chunks: ["product"],
      inject: true,
    }),
  ],
};
