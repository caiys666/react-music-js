const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(
    //     '/cloud',
    //     // createProxyMiddleware({
    //     //     target: 'https://bip-pre.diwork.com/iuap-apcom-workflow',
    //     //     changeOrigin: true,
    //     //     pathRewrite: {  // 路径重写，
    //     //         '^/api': '/api'  // 替换target中的请求地址，也就是说以后你在请求XXXXX这个地址的时候直接写成/api即可。
    //     //     }
    //     // })
    //     createProxyMiddleware({
    //         target: 'http://localhost:3000',
    //         changeOrigin: true,
    //         pathRewrite: {  // 路径重写，
    //             '^/cloud': '/cloud'  // 替换target中的请求地址，也就是说以后你在请求XXXXX这个地址的时候直接写成/api即可。
    //         }
    //     })
    // );
};