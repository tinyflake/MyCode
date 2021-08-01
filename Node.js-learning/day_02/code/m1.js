console.log('导入成功');
// module.exports.username = 'zs'
// module.exports.sayHello = function() {
//     console.log('hello');
// }

// 1.覆盖了上面
// module.exports = {
//         user: 'ls',
//         paly() {
//             console.log('playing');
//         }
//     }

// 2.export等价于module.exports  但永远指向module.exports
// exports = {
//     user: 'ls',
//     paly() {
//         console.log('playing');
//     }
// }


// 3.当既存在moudule.exports.a1和exports.a2时
// 共享的模块儿作用域成员为 { a1, a2 }
// module.exports.username = 'zs'
// module.exports.sayHello = function() {
//     console.log('hello');
// }
// exports.age = 20

// 4. 当exports = { a1 = 1, a2 = 2 }, module.exports.a3 = 3，module.exports = exports时
// 都包含
// exports = { a1: 1, a2: 2 }

// module.exports = exports
// module.exports.a3 = 3

// 输出：{ a1: 1, a2: 2, a3: 3 }

//******************** 不要同时使用exports 和  module.exports