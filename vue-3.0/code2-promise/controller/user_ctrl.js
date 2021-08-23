// 导入数据库操作模块
import db from '../db/index.js'

// 创建获取用户列表方法
export async function getAllUser(req, res) {
    try {
        const [rows] = await db.query('select id,username,password from users')
        console.log(rows)
        res.send({
            status: 0,
            message: '获取列表数据成功',
            data: 'rows'
        })
    } catch (error) {
        res.send({
            status: 1,
            message: '获取失败'
        })
    }
}
