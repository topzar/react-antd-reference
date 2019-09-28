//这个配置文件是为了vscode 等编辑器方便识别alias给出正确的提示和跳转放的
//真正的别名配置在 config-overrides.js下
//vs code 上使用了插件 Jump To Alias File
const path = require("path");
module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@store": path.resolve(__dirname, "src/store")
    }
  }
};
