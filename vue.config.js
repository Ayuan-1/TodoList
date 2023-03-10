const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  lintOnSave: false, // 关闭语法检查
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },

  },
  lintOnSave: false,// 关闭语法检查
  //  开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/atgcu': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/atgcu': '' },
        ws: true,
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        ws: true,
        changeOrigin: true
      },

    }
  }
}