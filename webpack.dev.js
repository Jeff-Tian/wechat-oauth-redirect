const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "/";
const webpack = require("webpack");
let FaviconsWebpackPlugin = require("favicons-webpack-plugin");

let pages = require("./webpack/pages");
module.exports = {
  mode: "development",
  entry: pages.entries,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...pages.plugins,
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    }),
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/static/images/logo.jpg",
      title: "人生苦短",
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: true
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ASSET_PATH
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", "md"]
  },
  module: require("./webpack/module.js"),
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
