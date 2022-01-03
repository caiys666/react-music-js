const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js[x]?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(svg|eot|woff|ttf)(\?.*)$/,
        use: {
          loader: 'url-loader',
        },
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
  ],
}
