module.exports = {
    dataFormat
}

//定义格式化时间函数
function dataFormat(dataStr) {
    const dt = new Date(dataStr)

    const Y = padZero(dt.getFullYear())
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${Y}-${m}-${d} ${hh}:${mm}:${ss}`
}

//定义补零函数
function padZero(n) {
    return n > 0 ? n : '0' + n
}