const path = require("path");

console.log("__dirname", __dirname);
console.log("path.resolve()", path.resolve());
console.log(`path.resolve(__dirname, 'dist')`, path.resolve(__dirname, "dist"));

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve("src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
};
