# 1.Vue 模板语法

## 1.插入值表达式

解决闪动：v-cloak指令

`1.提供样式`

[v-cloak]{

display:none;

}

`2.加v-cloak属性`

![1629205551367](C:\Users\tinyflake.DESKTOP-NQC0UI8\AppData\Roaming\Typora\typora-user-images\1629205551367.png)

## 2.指令

### 1.指令

​	就是自定义属性

​	以  v  开头

### 2.数据响应式：

​	数据变化导致的页面内容的变化

### 3.数据绑定：

​	数据填充到标签中

### 4.v-once:

​	该属性指定的内容只能修改一次

显示的信息后续不用修改则用 v-once可以提高性能

## 3.数据绑定指令

### 1.v-text

填充纯文本      比插值表达式更简洁

### 2.v-html

存在安全问题

本网站内部数据可以使用，来自第三方的不能用

### 3.v-pre

显示原始信息，跳过编译过程（分析编译过程）

##  4.双向数据绑定

v-model

## 5.MVVM设计思想

分而治之

M: model   模型	-->plain js obj （数据）

V: view 	-->DOM

VM: ViewModel	-->vue

![1629208032053](C:\Users\tinyflake.DESKTOP-NQC0UI8\AppData\Roaming\Typora\typora-user-images\1629208032053.png)

## 6.指令

### 1.v-on：事件绑定

```html
 <button v-on:click='num++'>点击</button>
  var vm = new Vue({

        el: '#app',
		data: {
              num: 0
          },
          methods: {
                handle: function () {
                console.log(this == vm);
                  this.mun++            
                }
            }
       })
```

### 2.v-model:数据绑定

实现双向数据绑定

### 3.v-bind:改数据

### 4.v-text:填入数据

更新内容 用插值表达式 {{}}

```js
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```



## 7.样式绑定

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .active {
            width: 100px;
            height: 100px;
            border: 1px solid pink;
        }

        .error {
            background-color: antiquewhite;
        }
        .base {
            border-radius: 40px;
        }
    </style>
</head>

<body>
    <div id="app">
        <div :class="{active: isActive,error:isError}">此处有内容</div>
        <div :class='arrClasses'>此处有内容</div>
        <div :class='objClasses'>此处有内容</div>
        <div class="base" :class='objClasses'>此处有内容</div>
        <button @click='handel'>切换</button>
    </div>

    <script src="./js/vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                isActive: true,
                isError: true,
                arrClasses: ['active', 'error'],
                objClasses: {
                    active: true,
                    error: true,
                }
            },
            methods: {
                handel: function () {
                    // 控制isActive 在 true 和 false 间切换
                    this.isActive = !this.isActive
                    this.isError = !this.isError
                    this.objClasses.active = false
                    if (this.arrClasses[1]) {
                        this.arrClasses.pop()
                    }
                }
            }
        })
    </script>
</body>

</html>
```

## 8.分支结构

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <div v-if='a>=90'>棒！</div>
        <div v-else-if='a>=60'>还不错！</div>
        <div v-else>再接再厉！</div>
        <div v-show='flag'>测试v-show</div>
        <button @click='handel'>切换 </button>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                a: '99',
                flag: true,
            },
            methods: {
                handel: function () {
                    this.flag = !this.flag
                }
            }
        })
        // v - show 控制元素是否显示 本质是display

    </script>
</body>

</html>
```



## 9.循环结构

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        [v-cloak] {
            display: none;
        }
    </style>
</head>

<body>
    <!-- v-cloak提高用户体验消除闪动 -->
    <div id="app" v-cloak>
        <h4>水果列表</h4>
        <ul>
            <li v-for="item in friuts">{{item}}</li>
            <li v-for="(item,index) in friuts">{{item +'---' + index}}</li>
            <!--kye的作用是提高性能 -->
            <li :key='index' v-for="(item,index) in myfriuts">
                <span>{{item.ename}}</span>
                <span>-------</span>
                <span>{{item.cname}}</span>
            </li>
        </ul>
    </div>

    <script src="./js/vue.js"> </script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                friuts: ['a', 'b', 'c'],
                myfriuts: [{
                    ename: 'apple',
                    cname: '苹果'
                },
                {
                    ename: 'orange',
                    cname: '橘子'
                },
                {
                    ename: 'banana',
                    cname: '香蕉'
                }]
            }
        })
    </script>
</body>

</html>
```



 



























