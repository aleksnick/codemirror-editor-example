const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { terser } = require('rollup-plugin-terser');

module.exports = {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/bundle.js",
      sourcemap: true,
      format: "iife"
    },
    {
      file: "./dist/bundle.min.js",
      plugins: [terser()],
      format: "iife"
    }
  ],
  plugins: [nodeResolve()]
}
