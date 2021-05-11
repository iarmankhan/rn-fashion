module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        extensions: [".ts", ".tsx", ".js", ".jsx", ".ios.js", ".android.js"],
        alias: {
          src: "./src",
        },
      },
    ],
  ],
};
