import { resolve } from 'path'
import makeRule from 'webpack-make-rule'

export default {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, './lib'),
    filename: 'index.js',
    library: 'scopeTypes',
    libraryTarget: 'umd'
  },
  module: {
    rules: [ makeRule('js', 'babel-loader') ]
  }
}
