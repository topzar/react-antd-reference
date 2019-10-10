const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackModuleRule
} = require("customize-cra");

//开发模式下，因为不是devtool: 'source-map', 而是cheap-evel-source-map导致无法浏览器调试做了这个修改
const rewiredMap = () => config => {
  config.devtool = "source-map";
  return config;
};

//引入项目底下为了编辑器插件用的webpack 配置，使用里面的alias
const webpackConfigContent = require("./webpack.config.js");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),

  rewiredMap(),
  addWebpackAlias(webpackConfigContent.resolve.alias),
  addWebpackModuleRule({
    test: /\.less$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 2,
          modules: true
          // 0 => no loaders (default);
          // 1 => postcss-loader;
          // 2 => postcss-loader, sass-loader
          // sourceMap: true,
        }
      },
      {
        loader: "less-loader",
        options: {
          javascriptEnabled: true,
          // strictMath: true,
          noIeCompat: true,
          localIdentName: "[local]--[hash:base64:5]" //"[path][name]__[local]"  product: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        }
      }
    ]
  })
);
