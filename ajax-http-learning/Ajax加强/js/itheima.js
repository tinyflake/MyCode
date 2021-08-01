// 转化为查询对象方法
function resoloveData(data) {
    var arr = []
    for (var k in data) {
        var str = k + '=' + data[k]
        arr.push(str)
    }
    return arr.join('&')
}

// 测试数据
// var res = resoloveData({
//     name: 'zs',
//     age: 18
// })
// console.log(res);

function itheima(options) {
    var xhr = new XMLHttpRequest()

    // 把外部传来的参数对象转化为查询对象
    var qs = resoloveData(options.data)

    // 判断请求方式
    if (options.method.toUpperCase() == 'GET') {
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() == 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }


    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}