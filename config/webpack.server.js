const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const { setPath } = require('./utils')
 

module.exports = merge(base, {
  // 告诉 webpack打包的是 node端代码，避免把nodejs内置的模块打包到输出文件中，例如 fs path
  target: 'node',
  // 避免把 node_modules包下的第三方模块中包含的 nodejs内置的模块打包到出书文件中
  externals: [nodeExternals()],
  // 入口文件
  entry: setPath('src/server/index.js'),
  // 表示是开发环境还是生产环境的代码
  mode: 'development',
  // 输出信息
  output: {
    // 输出文件名
    filename: 'index.js',
    // 输出文件路径
    path: setPath('build')
  }
})

