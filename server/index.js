const express = require('express')

const app = express()

// 导入跨域模块
app.use(require('cors')())

// 
app.use(express.json())

// 开放静态文件访问权限
app.use('/uploads', express.static(__dirname + '/uploads'))

// 导入数据库
require('./plugins/db')(app)

// 后端导入路由接口
require('./routes/admin')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})