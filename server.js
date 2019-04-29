const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const path = require("path");

const app = express();
const config = require("./webpack.dev.js");
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static("src/site-pages"));

app.use("*", function(req, res, next) {
  const filename = path.join(compiler.outputPath, `index.html`);

  compiler.outputFileSystem.readFile(filename, function(err, result) {
    if (err) {
      console.error(req.url, filename);
      return next(err);
    }

    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
});

// Serve the files on port 3000.
app.listen(3000, function() {
  console.log("wechat-oauth-redirect app listening on port 3000!\n");
});
