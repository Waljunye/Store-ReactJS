const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    watchOptions: {
        ignored: ["../dist/client/client.js", "../dist/server/server.js"]
    },
    resolve: {
        extensions: [
            ".jsx",
            ".js",
            "ts",
            "tsx",
            ".json"
        ],
        alias: {
            'react-dom': NODE_ENV === 'development'?'@hot-loader/react-dom': 'react-dom'
        }
    },
    entry: [path.resolve(__dirname, "../src/client/client.jsx"), 'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'],
    output: {
        path: path.resolve(__dirname, "../dist/client"),
        filename: "client.js",
        publicPath: "/static/"
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
        },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    }]

            }
        ],
    },
    devtool: NODE_ENV === 'development'? 'eval': false,
    plugins: NODE_ENV === 'development'?[new HotModuleReplacementPlugin(), new CleanWebpackPlugin()] : []
}