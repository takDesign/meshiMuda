var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");
module.exports = {
    context: path.join(__dirname, "Views"),
    entry: ["@babel/polyfill", "./js/index.js"],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-react",
                                "@babel/preset-env"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js"
    },
    plugins: debug
        ? []
        : [
              new webpack.optimize.OccurrenceOrderPlugin(),
              new webpack.optimize.UglifyJsPlugin({
                  mangle: false,
                  sourcemap: false
              })
          ]
};
