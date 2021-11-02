const path = require('path')

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    resolve: {
        extensions: [
            ".jsx",
            ".js",
            "ts",
            "tsx",
            ".json"
        ]
    },
    entry: path.resolve(__dirname, "../src/client/client.jsx"),
    output: {
        path: path.resolve(__dirname, "../dist/client"),
        filename: "client.js"
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
        }],
    },
    devtool: NODE_ENV === 'development'? 'eval': false,
}