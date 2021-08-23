var a = 1

function f1() {
    a++
}
f1()
// 默认导出
export default {
    a,
    f1
}