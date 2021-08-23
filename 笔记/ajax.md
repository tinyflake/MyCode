## 6.模板引擎实现原理

### 1.基本语法

exec()  用于检索字符串中的正则表达式的匹配

有匹配则匹配   没有就返回null

```js

var str = 'hello'
//创建匹配格式
var patten = /o/
//调用exec(string)
var result = patten.exec(str)
//有则匹配  无则null
console.log(result);
```

### 2.提取分组

```js
 var str = "<div>我是{{name}}</div>"

 //正则匹配 从双花括号开始匹配
 var pattern = /{{([A-Za-z]+)}}/

 var result = pattern.exec(str)

 console.log(result)
```

## Ajax 加强

### 1. XMLHttpRequest

XHR   浏览器提供的 JS 对象  用于请求服务器上的数据集

Jquery 中的 Ajax 是基于 XHR 对象封装出来的

### 2. XHR 发起get 请求

1. 创建xhr对象

2. 调用xhr.open()函数

3. 调用xhr.send()函数

4. 监听xhr.onreadystatechange事件

   

### 3.xhr 的 readyStates

![1627798841401](C:\Users\tinyflake.DESKTOP-NQC0UI8\AppData\Roaming\Typora\typora-user-images\1627798841401.png)

### 4.查询字符串

指在url末尾加上用于发送给服务器信息的字符串

### XHR 发起post请求

1. 创建xhr对象
2. 调用xhr.open()
3. 设置content-type属性（固定写法）
4. 调用xhr.send()函数，同时指定要发送的数据
5. 监听xhr.onreadystatechange事件

### 5. 新版XHR lev2

#### 1.可以设置http请求时限

```js
 // 设置超时时间
xhr.timeout = 3
xhr.ontimeout = () => {
	console.log('请求超时了！');
}
```

#### 2.可以使用FormData对象管理表单数据

```js
<body>
    <form action="" id="form1">

        <input type="text" name="uname" autocomplete="off">

        <input type="password" name="upwd">

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</body>
<script>
    // 通过DOM获取表单数据
    var form1 = document.getElementById('form1')

    // 注册事件
    form1.addEventListener('submit', function(e) {
        // 阻止表单默认行为
        e.preventDefault()

        // 创建FormData， 快速获取表单数据
        var form = new FormData()

        var xhr = new XMLHttpRequest()
        xhr.open('post', 'http://www.liulongbin.top:3006/api/formdata')
        xhr.send()

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        }
    })
</script>
```

#### 3.可以上传文件

定义ui 

 验证是否选择了文件  

将文件添加FormData中

上传文件post

#### 4.可以获取传输信息进度

### 7. axios

专注于网络数据请求

```js

<body>
    <button id="btn1">发起get请求</button>
    <button id="btn2">发起post请求</button>

</body>
<script>
    document.querySelector('#btn1').addEventListener('click', function() {
        var url = 'http://www.liulongbin.top:3006/api/get'
        var paramsObj = {
            name: 'zs',
            age: 20
        }
        axios({
            method: 'get',
            url: url,
            params: paramsObj
        }).then(function(res) {
            console.log(res.data);
        })
    })


    document.querySelector('#btn2').addEventListener('click', function() {
        axios({
            method: 'post',
            url: 'http://www.liulongbin.top:3006/api/post',
            data: {
                name: 'zs',
                age: 18,
            }
        }).then(function(res) {
            console.log(res.data);
        })

    })
</script>
```

### 8. 跨域与JSONP

#### 1.同源策略

协议  域名  端口号  相同则同源

`他是浏览器提供的安全功能`

即：不同源网站资源不能交互！



跨域请求可以正常发起  和响应 ，但数据被浏览器拦截

### 9.防抖和节流

#### 1.防抖：

触发延时事件的时候，一段时间内触发一次，若一段时间内多次触发，则每次触发时重新计时

解决：每次触发之前删除上一个定时器

#### 2.节流：

减少一段时间内的触发频率

节流阀：（互斥调用某个函数）类似于信号量

