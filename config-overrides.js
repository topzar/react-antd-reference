const fs = require("fs");
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

//开发模式下，因为不是devtool: 'source-map', 而是cheap-evel-source-map导致无法浏览器调试做了这个修改
const rewiredMap = () => config => {
  fs.writeFileSync(
    "/Users/babbage/Desktop/react-antd-reference/src/hello.json",
    JSON.stringify(config)
  );
  return config;
};

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  }),
  rewiredMap()
);
