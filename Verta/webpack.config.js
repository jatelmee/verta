const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    port: 3000,
    overlay: true,
    hot: true,
  },
  output: {
    filename: "[name].js",
    publicPath: "/",
    path: path.resolve(__dirname, path.join("wwwroot", "js")),
  },
  ...(process.env.production || !process.env.development ? {} : { devtool: "eval-source-map" }),
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/views/index.html",
      filename: "index.html",
    }),
  ]
}
