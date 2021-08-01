// <!-- 包配置入口文件 -->
const data = require('./src/dataFormat')
const escape = require('./src/htmlEscape')

// 向外暴露成员
module.exports = {
    ...data,
    ...escape
}