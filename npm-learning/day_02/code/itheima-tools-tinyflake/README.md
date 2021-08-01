提供时间格式化，HTMLEscape
## 安装
```
npm i itheima-tools-tinyflake
```


## 导入
```js
const itheima = require('itheima-tools-tinyflake')
```


## 格式化时间
```js
//调用dataFormate对时间进行格式化
const dt = itheima_tools.dataFormat(new Date())
console.log(dt); 
//结果：
// 2021-7-27 14:25:5
```


## 转义html中的特殊字符
```js
//待转换的 HTML字符串
const str = '<h1 style="font-size:12px">&npsp;&npsp;&npsp;&npsp;123</h1>'
// 调用.HTMLescape()方法转换
const newStr = itheima_tools.HTMLescape(str)
// 转换结果：&lt;h1 style=&quot;font-size:12px&quot;&gt;&amp;npsp;&amp;npsp;&amp;npsp;&amp;npsp;123&lt;/h1&gt;
console.log(newStr
```


## 还原html中的特殊字符
```js
//待还原的 HTML字符串
const str1 = '&lt;h1 style=&quot;font-size:12px&quot;&gt;&amp;npsp;&amp;npsp;&amp;npsp;&amp;npsp;123&lt;/h1&gt;'
// 调用.unHTMLescape方法还原
const newstr1 = itheima_tools.unHTMLescape(str1)
// 还原结果：<h1 style="font-size:12px">&npsp;&npsp;&npsp;&npsp;123</h1>
console.log(newstr1);
```


## 开源协议
ISC


