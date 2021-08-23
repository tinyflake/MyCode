// import './css/index.css'
import './css/index.less'

import $ from 'jquery'

$(function () {
    $('li:odd').css('background-color', 'pink')
    $('li:even').css('background-color', 'yellow')
})

class Person {
    static info = 'person info'
}
console.log(Person.info)
