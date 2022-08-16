const fs = require('fs')
const path = require('path')
const process = require('process')

const readDiffTypesFile = (filenameWithType) => {
    const filename = filenameWithType.split('.').length > 1 ? filenameWithType : [filenameWithType + '.css', filenameWithType + '.less', filenameWithType + '.scss']
    let content
    try {
        if (typeof filename === 'string') {
            try {
                content = fs.readFileSync(filename, 'utf-8')
            } catch {

            }

        } else {
            try {
                content = fs.readFileSync(filename[0], 'utf-8')
            } catch (error) {
            }
            try {
                content = content ? content : fs.readFileSync(filename[1], 'utf-8')
            } catch (error) {
            }
            try {
                content = content ? content : fs.readFileSync(filename[2], 'utf-8')
            } catch (error) {
            }
        }
    } catch (error) {
        console.log("🚀 ~ file: scoped-deep-import-style-loader.js ~ line 17 ~ readDiffTypesFile ~ error", error)
    }
    return content
}

const urlToPathAndName = (url) => {
    const { name, dir } = path.parse(url)

    return {
        filename: name,
        filepath: dir
    }
}

module.exports = function (source, map) {
    const rootabsolutePath = path.dirname(this.resourcePath)
    const cacheMap = new Map()
    const deepMatchedSource = (content, first, parentPath) => {
        const reg = first ? /\/\/\s*@deepimport\s*['"](\S*)['"];/ : /\@import ['"](\S*)['"];/
        const deepImportStyle = content && content.match(new RegExp(reg, 'g'))

        if (deepImportStyle) {
            for (let index = 0; index < deepImportStyle.length; index++) {
                const [importer, url] = deepImportStyle[index].match(new RegExp(reg));
                const { filepath, filename } = urlToPathAndName(url)
                let dirDir = path.join(parentPath, filepath)
                try {
                    process.chdir(dirDir)
                } catch (error) {
                    const urlWithDeal = `./node_modules/${url}`
                    const { filepath } = urlToPathAndName(urlWithDeal)
                    dirDir = path.join(this.rootContext, filepath)
                    process.chdir(dirDir)
                }
                let filecontent
                if (cacheMap.get(dirDir + filename)) {
                    return filecontent = ''
                } else {
                    try {
                        filecontent = readDiffTypesFile(filename)
                    } catch (err) {
                        console.error("🚀 ~ file: scoped-deep-import-style-loader.js ~ line 73 ~ deepMatchedSource ~ err", err)
                    }
                }
                filecontent = deepMatchedSource(filecontent, false, process.cwd())
                content = content.replace(importer, filecontent + '; \n')

                cacheMap.set(dirDir + filename, filecontent)
                process.chdir(rootabsolutePath)
            }
        }

        return content

    }
    const newSource = deepMatchedSource(source, true, rootabsolutePath)
    // fs.writeFileSync(path.resolve(__dirname, './mainTest.vue'), newSource)
    this.callback(null, newSource, map)
}