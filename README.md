## 启动项目

```sh
yarn
yarn dev
```

## 项目打包

```
yarn build
```

##

**提交代码规范**

代码规范请依照 eslint 规则

代码提交格式请依照以下的格式

```js
[
  {value: 'feat',     name: 'feat:     新增功能'},
  {value: 'fix',      name: 'fix:      修复缺陷'},
  {value: 'types',    name: 'types:    类型修改'},
  {value: 'docs',     name: 'docs:     文档变更'},
  {value: 'perf',     name: 'perf:     性能优化'},
  {value: 'style',    name: 'style:    代码格式（不影响功能，例如空格、分号等格式修正）'},
  {value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）'},
  {value: 'test',     name: 'test:     添加、修改测试用例'},
  {value: 'build',    name: 'build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）'},
  {value: 'ci',       name: 'ci:       修改 CI 配置、脚本'},
  {value: 'revert',   name: 'revert:   回滚 commit'},
  {value: 'wip',      name: 'wip:      功能开发中'},
  {value: 'workflow', name: 'workflow: 工作流程变更'},
  {value: 'chore',    name: 'chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）'},
],
```

## 项目介绍

本项目使用 `vue3` + `vite` + `antd-vue` 开发。

使用了以下的技术栈

| 介绍     |                     官网文档链接                     |
| :------- | :--------------------------------------------------: |
| 前端框架 | [vue3](https://cn.vuejs.org/guide/introduction.html) |
| 脚手架   |            [vite](https://cn.vitejs.dev/)            |
| ui 框架  | [antd-vue](https://antdv.com/components/overview-cn) |
| 路由     |      [vue-router](https://router.vuejs.org/zh/)      |
| 状态管理 |    [pinia](https://pinia.vuejs.org/zh/index.html)    |
| 图形工具 |       [antv-g6](https://antv-g6.gitee.io/zh/)        |

在项目中可以使用`JSX`进行开发，详情请参考`views/login/index.tsx`这个页面，或者参考以下的文档

[学会使用 Vue JSX](https://juejin.cn/post/6846687590704381959)

## 目录结果

```
- components // 公用组件文件存放
- assets // 公共资源存放
- plugins // 插件文件
- router // 路由相关
- store // 数据状态管理
- views // 页面级文件
- App.vue // Vue组件入口
- main.ts // 项目人口
- global.less // 全局样式文件
```
