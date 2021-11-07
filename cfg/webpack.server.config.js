const path = require('path')
const NodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    target: "node",
    entry: path.resolve(__dirname, "../src/server/server.js"),
    output: {
        path: path.resolve(__dirname, "../dist/server"),
        filename: "server.js"
    },
    externals: [NodeExternals()],
    resolve: {
        extensions: [
            ".jsx",
            ".js",
            "ts",
            "tsx",
            ".json"
        ]
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }]}, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        }
                    }]

                }],
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    optimization: {
        minimize: false
    }
}