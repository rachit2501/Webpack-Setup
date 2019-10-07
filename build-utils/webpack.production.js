const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
// It supports On-Demand-Loading of CSS and SourceMaps.
module.exports = () => ({
  module: {
    rules: [{ test: /\.css/, 
    use: [MiniCssExtractPlugin.loader, "css-loader"] }]
  },
  plugins: [new MiniCssExtractPlugin()]
});