## 1. express基本使用

### 1.1什么是express？

express 是基于node.js 平台 快速 发放 极简 的web 开发框架

node.js 内置 http 开发效率低    exppress基于http而来

服务器分为

web网站服务器  和  api 接口服务器

express可以写上述服务器



### 1.2安装

​	 npm i express@4.17.1



### 1.3创建服务器

```js
const express = require('express')

// 调用express 创建服务器*

const app = express()

//启动服务器*

app.listen(1234, () => {

    console.log('express server is running at http://127.0.0.1:1234')

})
```



### 1.4 监听get

```js
app.get('/user', (req, res) => {

   // 向客户端发送 JSON 对象*

    res.send({ name: 'zs', age: 18, gender: '男' })

})
```



### 1.5监听post

```js
app.post('/user', (req, res) => {

    // 向客户端发送文本内容
    res.send('请求成功')
})

```



### 1.6运行服务器

```js
//启动服务器
app.listen(81, () => {
    console.log('express server is running at http://127.0.0.1:81')
})
```



### 1.7获取url 携带的查询参数

```js
//获取默认req.query
app.get('/', (req, res) => {
    // req.query可以获取客户端查询参数
    // req.query默认是空对象
    console.log(req.query);
    res.send(req.query)
})
```



### 1.8获取url中的动态参数

```js
// 获取url动态参数
app.get('/user/:id', (req, res) => {
    // req.params默认是个一个空对象
    // 里面存放通过 : 动态匹配的参数值
    console.log(req.params);
    //获取动态参数
    res.send(req.params)
})
```



#### 1.8.1注意

1. 可以有多个动态参数

2. http://127.0.0.1:1234/user/:id/:name

3. 按序填写

   

### 1.9express.static()

托管静态资源

```js
const app = express()
app.use(express.static('./clock'))

app.listen(81, () => {
    console.log('express server is running at http://127.0.0.1:81')
})
```

#### 1.9.1对托管的静态资源挂载前缀

```js
const app = express()
    // 挂载路径
app.use('/clock', express.static('./clock'))


app.listen(81, () => {
    console.log('express server is running at http://127.0.0.1:81')
})
```

### 1.10 nodemon

当代码被修改后 自动重启项目   便于调试

​	









## 2. Express路由

### 2.1概念

1.路由就是映射关系

2.Express 中  **客户请求**与**服务器处理函数**的映射关系

3.其组成有三部分

`请求类型     URL地址     处理函数`

格式如下：

```JS
app.METHOD(PATH,HANDLER)
//如： 
app.get('/',（req,res）=>{})
```

### 2.2路由匹配过程

1.按照定义的`先后顺序`匹配

2.`url   类型  同时匹配成功`  则路由成功

### 2.3路由使用

1.挂载路由：

```js
// 路由挂载
app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => {
    res.send('post secussed!')
})
```

### 2.4模块化路由

不建议上述直接挂载到app上

### 2.5创建模块化路由模块

1.创建对应js文件

2.调用 express.Router()函数创建路由对象

3.向路由对象上挂载具体路由

4.使用 module.exports暴露路由对象

5.使用app.use()函数注册路由模块

```js
// 路由模块

// 导入express
const express = require('express')

// 创建路由对象
var router = express.Router()

// 挂载路由
router.get('/user/list', (req, res) => {
    res.send('get 挂载成功')
})

router.post('/user/add', (req, res) => {
    res.send('post 挂载成功')
})

// 导入路由 
module.exports = router
```

### 2.6注册路由模块

```js
const express = require('express')

const app = express()

//导入路由模块
const router = require('./router')

app.listen(81, () => {
    console.log('this express server is running at http://127.0.0.1:81');
})

//注册路由模块
app.use(router)
```



## 3. Express中间件

`业务流程的中间处理环节`

### 3.1中间件的注册

导入模块   --->  再注册模块即可使用

```js
app.use('/api',名字)
```

访问名字中内容是 加 api



### 3.2 格式

形参列表包含 next 参数     而 路由处理函数 只包含 req   req

`next（``） 函数  实现多个中间件连续调用    将流转关系转交给下一个中间件或路由`

### 3.3定义

```js
// 定义一个中间件函数
const mw = function(req, res, next) {
    next()
    console.log('this is a simple middleware!');
}
```

### 3.4全局中间件

 

```js
// 注册全局中间件（收到客户端请求后都会调用的中间件）
const mw=function(req, res, next) {
    next()
    console.log('this is a simple middleware!');
})

app.use(mw)

或者

// 注册全局中间件（收到客户端请求后都会调用的中间件）
app.use(function(req, res, next) {
    next()
    console.log('this is a simple middleware!');
})

```

### 3.5 中间件的作用

多个中间件间  共享一份 req  res   

于是 在上游中间件中  可以对 req   res    添加自定义 属性和 方法  供下游使用

 

```js
const express = require('express')

const app = express()

app.use(function(req, res, next) {
    // 请求到达服务器的时间
    const time = Date.now()

    // 为req对象挂载自定义属性，从而把时间共享给所有路由
    //上游定义
    req.startTime = time;
    next()
})

app.get('/', (req, res) => {
    res.send('get 成功，访问时间：' + req.startTime)
    //下游使用
})

app.post('/user', (req, res) => {
    res.send('post 成功，访问时间：' + req.startTime)
     //下游使用
})

app.listen(81, () => {})
```

`多个中间件顺序执行`



### 3.6 局部中间件

```js

// 定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了局部中间件函数');
}

// 创建路由
app.get('/', mw1, (req, res) => {
    console.log('Home page');
})

```

多个局部中间件：

```js
app.get('/user', [mw1, mw2], (req, res) => {
    res.send('Home page');
})

```



### 3.7注意：

1.在路由之前注册中间件

2.客户端发送的请求可以调用多个中间件处理

3.中间件不要忘记调用next（）

4.next()后不再写额外代码

5.连续调用多个中间件时，多个中间件共享req，res对象（方法属性）

### 3.8 中间件分类

有5类：

1. 应用级别

2. 路由级别

3. 错误级别               `！注册在路由之后`    

   参数有四个   err  req  res  next 

4. Express内置         

   ​	1.express.static    

    	2.express.json     解析JSON数据    

    	3.express.urlencoded      解析urlencoded数据

   ```js
   // 解析json数据
   app.use(express.json())
   
   //解析url-encoded数据
   app.use(express.urlencoded())
   
   
   app.post('/', (req, res) => {
       // 用req.body来接收客户端发来的请求数据
       //默认情况下不配置  解析表单数据（json中间件  则req.body 默认undefined
       //req.body 可以获取  JSON 格式和 url-encoded 格式数据 
       console.log(req.body);
       res.send('服务器接受成功！')
   })
   
   ```

   

   
### 3.9第三方中间件
```js
	//非官方中间件  需要自行安装
	1.安装 npm i body-parser
	2.导入 require..
	3.调用app.use()注册使用
```

### 4. 自定义中间件

1.定义中间件

2.监听req的data事件

3.监听req的end事件

4.使用querystring模块解析请求体数据

5.将解析出来的数据对象挂载为req.body

6.将自定义中间件封装

## 4.express写接口

创建服务器

创建api

写get接口



























