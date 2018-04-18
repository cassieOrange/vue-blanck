# examine vue_vue_router_vuex_axios

> 天津出入境检验

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 代码目录结构
```
|-build/ -环境构建
|   |-build.js - 生产环境构建代码
|   |-check-versions.js - 检查node npm 版本
|   |-utils.js - 构建工具相关
|   |-vue-loader.conf.js - vue加载的一些设置
|   |-webpack.base.conf.js - webpack基础配置
|   |-webpack.dev.conf.js - webpack开发环境配置
|   |-webpack.prod.conf.js - webpack生产环境配置
|-config/ -变量配置
|   |-dev.env.js/ -开发环境变量
|   |-index.js/ -项目一些配置变量
|   |-prod.env.js/ -生产环境变量
|-dist/ - 打包后目录
|-src/ - 源码目录
|   |-api/ - ajax请求
|       |-axios/ - vue推荐请求接口方式
|           |-request/ - 封装axios，同时暴露get、post方法
|       |-cache/ - 持久化缓存
|           |-LSproxy.js/ - es6代理
|           |-LStorage.js/ - 简单localstorage封装
|           |-handleData.js/ - 处理数据
|       |-service/ - 接口请求数据，统一封装方法
|   |-asset/ - 放置一些项目图片
|   |-component/ - 业务组件
|       |-demo.vue/ - 简单组件示例
|       |-idnex.js/ - 组件导出
|   |-page/ - 页面
|       |-demo.vue/ - 简单页面示例
|       |-index.js/ - 页面导出
|   |-router/ - 路由
|       |-index.js/ - 路由配置
|   |-store/ - 注册vuex、状态管理
|   |-style/ - css
|       |-w_pub_n.css 公共css
|   |-utils/ - 工具类组件（具体文件作用在每个文件注释中有说明）
|   |-app.vue - App.vue组件
|   |-main.js - 入口文件
|-static/ -静态资源
|-.babelrc -babel编译参数，vue开发需要babel编译
|-.editorconfig 编辑器配置文件
|-.gitignore 用来过滤一些版本控制的文件，比如node_modules文件夹
|-index.html/ -主页
|-package.json - npm依赖配置文件



static 和 assets 目录的区别
原文链接：https://segmentfault.com/q/1010000009842688

1、 static/ 文件夹下存储的是vm(vue虚拟dom)执行之前调用的图片文件，不会被webpack编译处理：它们会直接被复制到最终目录（默认是dist/static）下。
比如项目logo.png。
引用方式：/static/[filename] 必须使用绝对路径引用这些文件，这是通过在 config.js 文件中的 build.assetsPublicPath 和 build.assetsSubDirectory 连接来确定的
注：static/ 下不仅可存放图片，也可存放css等静态资源，在 index.html(主页，vue启动页)引入的静态资源；若把一些图片等存放在assets/中，vue虚拟dom刚启动，是没法找到这些静态资源的。
2、 assets/ 项目中某组件和某页面需要的图片、图标


build 和 config 使用webpack工具打包和启动运行 结构梳理：
1、当运行 npm run dev 命令时（运行），启动 build/webpack.dev.conf.js 文件
    （1）|-build/webpack.dev.conf.js  调用 |-build/utils.js文件,使用其中的 styleLoaders、createNotifierCallback 方法，加载css 和导航页签title、icon等。
    （2）|-build/webpack.dev.conf.js  调用 |-config/index.js文件,使用其中的 dev 模块配置
    （3）|-build/webpack.dev.conf.js  调用 |-config/dev.env.js文件,使用其中的配置; |-config/dev.env.js 调用 |-config/prod.env.js配置。
    （4）|-build/webpack.dev.conf.js  调用 |-build/webpack.base.conf.js文件，与|-build/webpack.base.conf.js文件中的基础配置合并
    （5）|-build/webpack.base.conf.js 调用 |-build/vue-loader.conf.js 中关于vue-loader的配置

2、当运行 npm run build 命令时（打包），启动 build/build.js 文件
    （1）|-build/build.js 调用 |-build/check-versions.js , 检查版本，若出现问题，输出提示
    （2）|-build/build.js 调用 |-build/webpack.prod.conf.js文件暴露的全局模块 webpackConfig ，进行相关操作
    （3）|-build/webpack.prod.conf.js 调用 |-config/index.js文件,使用其中的 build 模块配置
    （4）|-build/webpack.prod.conf.js 调用 |-build/utils.js文件，使用其中的 styleLoaders、assetsPath 方法,打包文件路径
    （5）|-build/webpack.prod.conf.js 调用 |-build/webpack.base.conf.js文件，与|-build/webpack.base.conf.js文件中的基础配置合并
    （6）|-build/webpack.base.conf.js 调用 |-build/vue-loader.conf.js 中关于vue-loader的配置


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
