const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const sitePages = fs.readdirSync("src/site-pages");
const functionalPages = fs.readdirSync("src/function-pages");
const sitePagesEn = fs.readdirSync("src/site-pages-en");

const entries = {};

sitePages.map(f => {
  entries[path.basename(f, path.extname(f))] = [
    `./src/site-pages/${f}`,
    "webpack-hot-middleware/client"
  ];
});

sitePagesEn.map(f => {
  entries["en/" + path.basename(f, path.extname(f))] = [
    `./src/site-pages-en/${f}`,
    `webpack-hot-middleware/client`
  ];
});

functionalPages.map(f => {
  entries[path.basename(f, path.extname(f))] = [
    `./src/function-pages/${f}`,
    "webpack-hot-middleware/client"
  ];
});

module.exports = {
  entries,
  plugins: [
    ...sitePages.map(
      p =>
        new HtmlWebpackPlugin({
          filename: `${path.basename(p, path.extname(p))}.html`,
          title: "人生苦短，少做跳转。一劳永逸，不再搬砖。",
          chunks: [path.basename(p, path.extname(p)), "vendors~index", "index"],
          template: "src/static/index.html"
        })
    ),
    ...sitePagesEn.map(
      p =>
        new HtmlWebpackPlugin({
          filename: `${path.basename(p, path.extname(p))}.html`,
          title: "Finish the wechat redirect once and for all!",
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
    )
  ]
};
