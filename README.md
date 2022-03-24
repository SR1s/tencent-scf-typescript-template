# 腾讯云函数 TypeScript 工程模板

腾讯云函数提供的模板工程是基于 JavaScript 的，甚至都没使用 Node Package 进行工程管理，更不用说支持 TypeScript。折腾了一番，鼓捣了个工程模板，方便后面新建工程的时候使用。

将 Node Package、TypeScript、Serverless Framework 做了整合：
1. 使用 Node 进行项目管理，使用 npm script 提供代码编译(`dev`、`build`)、部署(`deploy`)
2. TypeScript 用于将 ts 代码转为 js 代码，放置到 ./dist 目录下
3. 根目录下的 index.js 作为云函数入口，调用 ./dist 目录下的编译产物
4. serverless.yml 做了基本的云函数配置: 以当前目录为代码执行目录，整体(包含源码)打包部署到云端；依赖设为在线安装，避免部署的包过大

## 前置条件
1. 安装 NodeJS
2. 安装 Serverless Framework CLI

## 使用方式
1. 下载此工程，打开 `src/index.ts` 即可编写代码
2. 开发编译： `npm run dev`
3. 部署：`npm run deploy`
| 部署会将 TypeScript 代码编译成 JavaScript，存放在 ./dist 下
| 并调用 serverless deploy 部署至腾讯云函数
4. 注：腾讯云函数采用 CommonJS 模块系统，引入相关 node_module 需引入 commonjs 版本
5. 编辑 `serverless.yml` 编辑云函数基本信息
6. 编辑 `package.json` 编辑项目基本信息
7. TypeScript 编译选项在 `tsconfig.json` 中调整