const itheima_tools = require('../itheima-tools-tinyflake')
const dt = itheima_tools.dataFormat(new Date())
console.log(dt);

// html转义
const str = '<h1 style="font-size:12px">&npsp;&npsp;&npsp;&npsp;123</h1>'
const newStr = itheima_tools.HTMLescape(str)
console.log(newStr)

// html还原
const str1 = '&lt;h1 style=&quot;font-size:12px&quot;&gt;&amp;npsp;&amp;npsp;&amp;npsp;&amp;npsp;123&lt;/h1&gt;'
const newstr1 = itheima_tools.unHTMLescape(str1)
console.log(newstr1);