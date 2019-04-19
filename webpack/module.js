module.exports = {
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
    },
    {
      test: /\.md$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "raw-loader"
        }
      ]
    }
  ]
};
