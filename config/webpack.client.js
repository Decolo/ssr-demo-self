const merge = require('webpack-merge')
const base = require('./webpack.base')
const { setPath } = require('./utils')

module.exports = merge(base, {
  // 入口文件
  entry: setPath('src/client/index.jsx'),
  // 表示是开发环境还是生产环境的代码
  mode: 'development',
  // 输出信息
  output: {
    // 输出文件名
    filename: 'index.js',
    // 输出文件路径
    path: setPath('public')
  }
})
