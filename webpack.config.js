const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// the HTML plugin will inject the code you create into a "template" file

module.exports = {
    entry: "./src/react/index.jsx", // this is the "master" file
    output: { // this is where the final bundle goes
        path: path.join(__dirname, "/dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/react/template.html"
        })
    ]
}