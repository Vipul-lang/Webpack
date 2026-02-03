const path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

module.exports={
    entry:"./app/index.js",
    module:{
        rules:[
            {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },
     {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test:/\.(js)$/,
        use:"babel-loader"
      }
        ]
    },
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },

    devServer:{
        port: 3000,
        open: true,
        hot: true
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",

}