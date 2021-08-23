### 1.npm是什么？为什么需要包？

因为node.js只提供底层api，导致开发时效率低 

包是基于内置模块封装出来的，提供高级方便的api提高开发效率

类似于 JQuery 和 js 的关系






### 2.从何处下载包？

www.npmjs.com

www.registry.npmjs.org 服务器对外共享包




### 3.注意项目...

项目开发中吧node_modules文件夹添加到gitgnore忽略文件夹中



### 4.dependencies节点： 项目依赖包 dependencies

属性名：版本号





### 5.快速生成package.json配置文件

npm init -y

仅在英文目录下运行！





### 6.一次性安装所有包

npm install 命令会先读取package.json 中的包并安装所有包





###  7.devDependencies 节点：开发的项目依赖包  devdependencies

npm i包名 --save-dev 

等价于：

 npm i 包名 -D或者 npm i  -D 包名 







### 8.解决下包慢的问题

用淘宝NPM镜像服务器

该服务器将外服包下到国内服务器再转发给国内用户

镜像即副本

#### 8.1切换下包地址

```js
npm config get registry 	//查看下包镜像源

npm config setregistry=url	 //切换下包地址
```

#### 8.2用nrm工具切换下包镜像源

​```js
 nrm ls 	//查看所有镜像源

nrm use 名字 	 //使用镜像源
```







### 9.包的分类：

项目包有     开发依赖包 devdependencies   和  核心依赖包dependencies





### 10.全局包

```js
//工具性质的包才需要全局安装
npm install 包名 -g	//全局包安装
```





### 11.i5ting_toc

将.md文件转HTML文件





### 12.规范包结构

```js

    "name": "test",		//根目录文件名
    "version": "1.0.0", 	//版本号
    "main": "test.js",		//包入口文件
```





### 13开发自己的包

需要三个文件：

README.md	包说明文档

package.json	包配置管理文件

index.html	包入口文件

#### 13.1初始化package.json

name,version,main

#### 13.2在自定义包内定义函数并向外暴露接口

```js
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

// 向外暴露成员
module.exports = {
    dataFormat
}
```



#### 13.3将自定义包进行拆分并向外暴露成员

```js
// <!-- 包配置入口文件 -->
const data = require('./src/dataFormat')
const escape = require('./src/htmlEscape')

// 向外暴露成员
module.exports = {
    ...data,
    ...escape
}
```

并建立src文件夹内置各种功能处理js文件

####  13.4编写说明文档README.MD







### 14发布与删除包

### 14.1发布

1. 发布包应先将下包地址改为官方地址而非镜像源
2. 先登录  npm  login
3. 再npm pubilsh

### 14.2删除

npm unpublish 包名 --force

1. 1.只能删除72小时以内的包
2. 2.24小时内不能重复发布包





### 15.模板加载机制

#### 15.1内置模块加载机制

1. 1.内置模块优先从缓存中加载

2. 2.内置模块儿加载优先级最高

3. 3.自定义模块加载以 ./     ../   开头   不用则以内置模块加载

4. 按照 .js    .json   .node  扩展名加载文件 加载失败则报错

   

#### 15.2第三方模块加载机制

按照以下顺序查找模块：

1. C:\User\intheima\project\node_modules\tools    projiect工程根目录
2. C:\User\intheima\project\tools
3.  C:\User\intheima\tools
4.  C:\intheima\tools

#### 15.3目录作为模块的加载机制

1. 寻找package.json文件中main属性
2. 寻找目录下的index.js

