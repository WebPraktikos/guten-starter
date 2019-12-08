let path = require("path");

module.exports = {
  context: path.resolve("src"),
  entry: ["./index.js"],
  output: {
    path: path.resolve("build"),
    publicPath: "/public/assets/js/",
    filename: "build.js"
  },
  watch: true,
  devServer: {
    contentBase: "public"
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@wordpress/babel-plugin-import-jsx-pragma",
              "@babel/plugin-transform-react-jsx"
            ]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          // Inject CSS into the DOM
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Transpiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  }
};
