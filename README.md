# FullStack
`vue i -g @vue/cli` 全局安装vue 脚手架
`vue create web` 创建移动端项目

# 后台管理模块
`vue create admin` 创建后台管理项目
`vue add element` 下载element 模块
`vue add router`  下载路由模块

# 服务端模块
`cd server` 进入服务端
`npm init -y` 初始化服务端项目
新建 `index.js` 入口文件
配置 `scripts` 执行函数 `"serve": "nodomon index.js",`
全局安装 `npm i -g nodemon`
全局安装服务端模块，数据库连接工具，cors允许跨域
`npm i express@next mongoose cors`

# 后端模块
安装 `npm i axios`

`vue2-editor` 富文本编译中，图片上传使用的是贝斯64编码，当图片过大时，导致接口加载慢，耗时长。故使用图片上传接口；
文件上传 必须使用 ` new formData() ` , 不能使用JSON 格式；



