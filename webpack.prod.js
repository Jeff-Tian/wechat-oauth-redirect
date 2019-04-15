const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "/";
const webpack = require("webpack");
const fs = require("fs");
let FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const sitePages = fs.readdirSync("src/site-pages");
const functionalPages = fs.readdirSync("src/function-pages");

const entries = {};

sitePages.map(f => {
  entries[path.basename(f, path.extname(f))] = `./src/site-pages/${f}`;
});

functionalPages.map(f => {
  entries[path.basename(f, path.extname(f))] = `./src/function-pages/${f}`;
});

module.exports = {
  mode: "production",
  entry: entries,
  devtool: "source-map",
  // devServer: {
  //   contentBase: "./dist"
  // },
  plugins: [
    new CleanWebpackPlugin(),
    ...sitePages.map(
      p =>
        new HtmlWebpackPlugin({
          filename: `${path.basename(p, path.extname(p))}.html`,
          title: "人生苦短，少做跳转。一劳永逸，不再搬砖。",
          chunks: [path.basename(p, path.extname(p))],
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
          },
          template: "src/static/index.html"
        })
    ),
    ...functionalPages.map(
      p =>
        new HtmlWebpackPlugin({
          filename: `${path.basename(p, path.extname(p))}.html`,
          title: "跳转中……",
          chunks: [path.basename(p, path.extname(p))],
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
    }),
    new FaviconsWebpackPlugin("./src/static/images/logo.jpg")
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ASSET_PATH
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
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
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
