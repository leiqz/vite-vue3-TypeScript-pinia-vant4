# Vue 3 + TypeScript + Vite + vant4 + Eslint + Prettierrc


## 一、项目运行步骤

### 拉取代码（以拉取develop分支为例）

git clone /........

## 安装依赖

npm install

### 运行项目

```
npm dev
```

### 打包项目

```
npm run build
```

## 二、src文件目录结构

│
│--src
|
│─App.vue -------------------------------------  vue模板入口
│─main.ts -------------------------------------  编译入口
|
|-vite-env.d.ts -------------------------------- 自动把类型添加到 vite 提供的 import.meta.env 上
|
|-api ------------------------------------- 各类API封装
|
├─assets
│    │
│    ├─icons（图标文件）
│    │    │
│    │    │─404.svg --------------------------  404
│    │
|    |─logo
|    |    |
|    |    |-logo.svg -------------------------- logo
│    │      
│    └─styles（样式文件夹）
│         │
│         │─index.scss --------------------  样式汇总
│ 
│          
├─components（公用组件文件夹）
│    │
│ 
│      
├─layout（布局）
│    │
│    │─index.vue --------------------------------  页面布局
│
│      
├─router（路由配置文件夹）
│    │
|    |-modules
|    |    |
|    |    |-constantRoutes.ts ------------------------------ 公共路由配置
|    |    |—dynamicRoutes.ts ------------------------------- 权限路由 or 静态路由
|    |    |_index.ts --------------------------------------- 路由处理
|    |
│    │─index.ts --------------------------------- 路由插件入口
│    └─router-guards.ts ------------------------- 路由守卫
│ 
│      
├─store（vuex配置文件夹）
│    │  
│    │
│    │  
|    |-modules
|    |    |
|    |    |-route.ts ------------------------------ 路由信息存储
|    |    └─userInfor.ts -------------------------- 用户信息存储
|    └─index.ts ----------------------------------- pinia 入口
│ 
│          
├─utils（其他特殊插件文件夹 or 工具）
│    │
│    │-errorCode.ts ------------------ 错误状态配置
│    └─request.ts -------------------- axios封装
│ 
│      
└─views（路由页面文件夹）
│    │
│    │─login.vue -------------------------------  登录页
│    |
│    |
│    |
│    |
│    |
│    |........
│    |........
│
│
│-auto-import.d.ts ----------------------------- 自动引入方法
|-components.d.ts ------------------------------ 自动引入组件
```
