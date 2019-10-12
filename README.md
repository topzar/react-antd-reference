# react-antd-reference

基于 react+antd+react-router+redux 搭建的，项目常用组件封装的项目，有利于快速拷贝过去使用
a

> 项目进度和计划情况需要查看 issue 区。

## 版本

### 1.0

- [x] 基础架构
- [x] 最基本 UI 组件
- [x] 基本目录、代码编写规范
- [x] 用户登录，退出功能
- [x] 项目需要常用功能集成

  - [x] 路由
  - [x] 本地化
  - [x] 国际化支持
  - [x] 网络请求
  - [x] mockjs
  - [x] 状态管理器 react-redux

## 规范

### 1. 文件和目录

1. 所有组件，page 的名字首字母开始大写
2. 平常的所有文件，目录名采用驼峰命名

### 2. 代码编写

1. 所有变量，方法名用驼峰命名法起名

### 3. 所有 css-modules 引入的名字全用 camelCase 写法编写

    > simple-example_code ->> simpleExampleCode

### git commit 提交规范

> vscode 插件 : vsc-commitizen

[阮一峰的指南文档](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

> yarn add -g commitizen
>
> commitizen init cz-conventional-changelog --yarn --dev --exact
>
> 提交代码用 git cz 来替代 git commit

## 项目依赖指南

> 最新的在顶部

- ui 库 antd

  ```
  $ yarn add antd
  ```

- 高级配置

  > 不在 eject 的前提下修改 cra 默认配置

  ```
  $ yarn add react-app-rewired customize-cra
  $ yarn add babel-plugin-import
  ```

  > 按照 antd 官方的配置指南做的配置,可以参考一下链接
  > 高级配置 [高级配置](https://ant.design/docs/react/use-with-create-react-app-cn#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE)

- 路由

  ```
  $ yarn add react-router-dom
  ```

  > react-router 官网 [react-router](https://reacttraining.com/react-router/web/guides/quick-start)

- 状态管理器

  ```
  yarn add redux react-redux redux-thunk
  ```

- 网络请求

  ```
  yarn add axios
  ```

- 业务国际化

  ```
  yarn add react-intl
  ```

- 数据本地保存
  > ~~yarn add localforage~~
  >
  > ~~yarn add store~~
  ```
  yarn add store2
  ```

## 可用脚本

1. 开发

   ```
   yarn start // npm run start
   ```

2. 生产编译

   ```
   yarn run build // npm run build
   ```

## 效果图

![](react-reference-demo-thumb.png)
