const path = require("path");
// CommonJS syntax
module.exports = {
  
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
