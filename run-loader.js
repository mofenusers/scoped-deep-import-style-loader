const fs = require('fs')
const path = require('path')
const { runLoaders } = require('loader-runner')

runLoaders({
    resource: path.resolve(__dirname, "./main.vue"),
    loaders: ['vue-scoped-deep-import-style-loader'],
    readResource: fs.readFile.bind(fs),
    context: {
        rootContext: __dirname
    },
}, (err) => {
    err && console.log("🚀 ~ file: run-loader.js ~ line 11 ~ err", err)
})