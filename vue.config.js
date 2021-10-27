const path = require('path')
module.exports = {
  devServer: {
    hot: true,
    hotOnly: false, // 页面构建失败不刷新页面
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^api': ''
        },
        changeOrigin: true
      }
    }
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // }
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
