import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
const path = require('path')

export default {
    input: path.resolve(__dirname, 'scoped-deep-import-style-loader.js'),
    output: {
        file: './dist/bundle.js',
        format: 'cjs'
    },
    plugins: [resolve(), babel({ babelHelpers: 'bundled' }),terser()]
};