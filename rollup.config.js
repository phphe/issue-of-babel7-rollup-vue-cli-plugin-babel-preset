// rollup.config.js
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/entry.js",
  output: {
    file: "bundle.js",
    format: "umd"
  },
  plugins: [
    babel({ exclude: "node_modules/**", runtimeHelpers: true }),
    resolve(),
    commonjs()
  ]
};
