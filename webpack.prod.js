const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "/";
const webpack = require("webpack");
const fs = require("fs");

const sitePages = fs.readdirSync("src/site-pages");
const functionalPages = fs.readdirSync("src/function-pages");

const entries = {};

sitePages.map(f => {
  entries[path.basename(f, ".ts")] = `./src/site-pages/${f}`;
});

functionalPages.map(f => {
  entries[path.basename(f, ".ts")] = `./src/function-pages/${f}`;
});

module.exports = {
  mode: "production",
  entry: entries,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...sitePages.concat(functionalPages).map(
      p =>
        new HtmlWebpackPlugin({
          filename: `${path.basename(p, ".ts")}.html`,
          title: "人生苦短，少做跳转。一劳永逸，不再搬砖。",
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        })
    ),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    }),
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ASSET_PATH
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
