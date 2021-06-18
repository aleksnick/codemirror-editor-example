const { nodeResolve } = require("@rollup/plugin-node-resolve");

module.exports = {
  input: "./src/index.js",
  output: {
    file: "./dist/bundle.js",
    format: "iife"
  },
  plugins: [nodeResolve()]
}
