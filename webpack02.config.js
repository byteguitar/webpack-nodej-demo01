/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-11-14
 * Time: 下午10:05
 * To change this template use File | Settings | File Templates.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        app:"./webpack_test_02.js",
        vendors:['jquery']
    },
    output: {
        path: __dirname,
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins:[
        //第一个参数是entry中的名字
        new webpack.optimize.CommonsChunkPlugin('vendors', 'public/vendors.js')
    ]
};
