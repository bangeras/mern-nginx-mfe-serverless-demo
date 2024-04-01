const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 3001
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-react", "@babel/preset-env"],
            }
        }]
    },
    plugins: [
        new ModuleFederationPlugin(
            {
              name: 'MFE1',
              filename: 'remoteEntry.js',
              exposes: {
                "./ComponentA": "./src/ComponentA",
                "./ComponentB": "./src/ComponentB"
              },
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        )
    ]

}