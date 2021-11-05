const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config')
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const nodemon = require('nodemon')
const path = require('path')
const express = require('express')

const HMRServer = express();
const clientCompiler = webpack(webpackClientConfig);

HMRServer.use(webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    writeToDisk: true,
    stats: 'errors-only'
}))

HMRServer.use(webpackHotMiddleware(clientCompiler, {
    path: "/static/__webpack_hmr"
}))

HMRServer.listen(3001, () =>{
    console.log("HMR Server successful started")
})
const compiler = webpack(webpackServerConfig);
compiler.run((err) => {
    if (err){
        console.log(err)
    }

    compiler.watch({}, (err) =>{
        if (err){
            console.log(err)
        }
        console.log("Compilation success")
    });
    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, "../dist/server"),
            path.resolve(__dirname, "../dist/client")
        ]
    })
})