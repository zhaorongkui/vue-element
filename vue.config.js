/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-09-28 21:56:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-19 21:08:35
 */
module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/online/" : "/",
  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项

  devServer: {
    port: 8085, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: 'http://localhost:3000', // 配置跨域处理,只有一个代理
    // proxy: {
    //   "/api": {
    //     target: "<url>",
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   "/foo": {
    //     target: "<other_url>"
    //   }
    // } // 配置多个代理
  }
};
