module.exports = {
    HTMLescape,
    unHTMLescape
}

// 定义转义html方法
//正则表达式全局匹配<>"&并替换成实体字符
function HTMLescape(htmlStr) {
    return htmlStr.replace(/[<>"&]/g, function(match) {
        switch (match) {
            case '<':
                return "&lt;"
            case '>':
                return "&gt;"
            case '\"':
                return '&quot;'
            case '&':
                return "&amp;"
        }
    });
}

// 定义还原html方法
function unHTMLescape(htmlStr) {
    return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, function(match) {
        switch (match) {
            case "&lt;":
                return '<'
            case "&gt;":
                return '>'
            case '&quot;':
                return '\"'
            case "&amp;":
                return '&'
        }
    });
}