const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 入口文件
  entry: './src/main.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, '/dist'),
  },
  module: {
    // 配置相应的规则
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'less-loader',
          // 'postcss-loader',
          // {loader:'style-loader'},
          // {loader:'css-loader'},
          // {loader:'less-loader'},
        ],
      },
      {
        test: /\.js[x]?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff|ttf|svg|eot)$/, //fonts目录下四个文件后缀名
        use: ['url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx'], // 解析js和jsx后缀的文件
  },
  // 配置相应的插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
}
