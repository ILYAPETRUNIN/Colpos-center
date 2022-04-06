const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.module.rule("svg-sprite").use("svgo-loader").loader("svgo-loader");
  },
  pluginOptions: {
    svgSprite: {
      dir: "src/assets/icons",
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: false,
        spriteFilename: "img/icons.[hash:4].svg",
      },
      pluginOptions: {
        plainSprite: true,
      },
    },
  },
});
