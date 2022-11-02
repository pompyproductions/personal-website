const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
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
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/react/template.html",
            favicon: "./src/assets/favicon.ico"
        }),
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, "src/assets", "_redirects")
            ]
        }),
    ]
}