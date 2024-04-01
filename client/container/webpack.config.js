const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
        allowedHosts: ['all']
    },
    module:{
        rules:[
        {
            loader: 'babel-loader',
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-react", "@babel/preset-env"],
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }
        ]
    },
    plugins: [
        new ModuleFederationPlugin(
            {
              name: 'CONTAINER',
              filename: 'remoteEntry.js',
              remotes: {
                "MFE1": "MFE1@http://localhost:3001/remoteEntry.js"
              }, 
              exposes: {
              },
            }
        ),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    output: {
        // filename: '[name].bundle.js',
        // path: path.resolve(__dirname, 'dist'),
       clean: true
    },

}