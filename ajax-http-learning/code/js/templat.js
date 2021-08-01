function template(id, data) {
    var str = document.getElementById(id).innerHTML
    var pattern = /{{\s*([A-Za-z]+)\s*}}/

    var pattResult = null
    while (pattResult = pattern.exec(str)) {
        str = str.replace(pattResult[0], data[pattResult[1]])
    }
    return str
}