const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "/";
const webpack = require("webpack");
const fs = require("fs");
let FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const tsImportPluginFactory = require("ts-import-plugin");

const sitePages = fs.readdirSync("src/site-pages");
const functionalPages = fs.readdirSync("src/function-pages");

const entries = {};

sitePages.map(f => {
  entries[path.basename(f, path.extname(f))] = [
    `./src/site-pages/${f}`,
    "webpack-hot-middleware/client"
  ];
});

functionalPages.map(f => {
  entries[path.basename(f, path.extname(f))] = [
    `./src/function-pages/${f}`,
    "webpack-hot-middleware/client"
  ];
});

module.exports = {
  mode: "development",
  entry: entries,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...sitePages.map(
      p =>
        new HtmlWebpackPlugin({
          filename: `${path.basename(p, path.extname(p))}.html`,
          title: "人生苦短，少做跳转。一劳永逸，不再搬砖。",
          chunks: [path.basename(p, path.extname(p)), "vendors~index", "index"],
          template: "src/static/index.html"
        })
    ),
    ...functionalPages.map(
      p =>
        new HtmlWebpackPlugin({
          filename: `${path.basename(p, path.extname(p))}.html`,
          title: "跳转中……",
          chunks: [path.basename(p, path.extname(p))]
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
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "antd",
                libraryDirectory: "lib",
                style: true
              })
            ]
          })
        },
        exclude: /node_modules/
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
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              javascriptEnabled: true
            }
          }
        ]
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
