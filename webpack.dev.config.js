const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')

module.exports = merge(baseConfig, {
  // 设置为开发模式
  mode: 'development',
  devtool: 'inline-source-map',
  // 配置服务端目录和端口
  devServer: {
    contentBase: './dist',
    // host: 'test.yyuap.com',
    host: 'localhost',
    port: 8081,
    progress: true,
    proxy: {
      //设置代理，必须填
      // "/api": {
      //     //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
      //     target: "http://localhost:3300", //代理的目标地址，这是豆瓣接口地址网址
      //     changeOrigin: true, //是否设置同源，输入是的
      //     pathRewrite: {
      //         //路径重写
      //         "/api": "/", //路径转发代理 /api 的意思就是 用/api 代替http:localhost：8080
      //     },
      // },
      '/cloud': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/cloud': '',
        },
      },
    },
  },
})
