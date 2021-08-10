const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        assets: resolve('src/assets'),
        css: resolve('src/assets/css'),
        images: resolve('src/assets/images'),
        views: resolve('src/views'),
        components: resolve('src/components'),
        api: resolve('src/api'),
        mixins: resolve('src/mixins'),
        store: resolve('src/store'),
      },
    },
  },
}

module.exports = {
  productionSourceMap: false,
}

// const webpack = require('webpack')
// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'windows.jQuery': 'jquery',
//       }),
//     ],
//   },
// }

module.exports = {
  devServer: {
    host: 'localhost',
    port: '8083',
    proxy: {
      '/api': {
        // /api 表示拦截以/api开头的请求路径
        target:
          'https://www.fastmock.site/mock/fd7892a0bc009dd928228bb6dba37099/test', // 跨域的域名
        changeOrigin: true, // 是否开启跨域
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          // 重写路径
          '^/api': '', // 把/api变为空字符
        },
      },
    },
  },
}
