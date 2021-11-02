const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js')
const nodemon = require('nodemon')
const path = require('path')

const compiler = webpack(webpackConfig);
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