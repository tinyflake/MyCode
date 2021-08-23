// 导入mysql模块
import mysql from 'mysql2'

// 创建数据库对象
const pool = new mysql.createPool({ //配置对象
    host: '127.0.0.1', //主机地址
    post: '3306', //3306
    database: 'my_db_01', //数据库名称
    user: 'root', //数据库账号和密码
    password: 'admin123',
})

// 默认导出
export default pool.promise()
