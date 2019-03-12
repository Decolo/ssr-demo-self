const { setPath } = require('./utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  resolve: {
    alias: {
      '@': setPath('src')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                })
              ]
            }
          },
          'sass-loader'
        ]
      }, {
        test: /\.(png|jp?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // static/fonts/[name].[hash:7].[ext]
              name: 'img/[name].[ext]',
            }
          }
        ]
      }, {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // static/fonts/[name].[hash:7].[ext]
              name: 'fonts/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ]
}