// 这个文件是 vue-cli创建出来的项目的配置文件
// 在vue.config.js这个配置文件中,可以对整个项目的打包、构建进行全局性的配置
// webpack在进行打包的时候,底层用到了node.js
// 因此,在vue.config.js配置文件中,可以导入并使用node.js中的核心模块
const path = require('path')
const themepath = path.join(__dirname, './src/theme.less')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          // 'text-color': '#111',
          // 'border-color': '#eee',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          // ../ ./ theme.less
          // 从盘符开始的路径,叫做绝对路径  C:\\Users\liulongbin\\theme.less
          hack: `true; @import "${themepath}";`
        }
      }
    }
  },

  publicPath: './'
}
