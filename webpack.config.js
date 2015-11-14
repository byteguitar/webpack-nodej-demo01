module.exports = {
    entry: "./webpack_test_02.js",
    output: {
        path: __dirname,
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
