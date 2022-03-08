const itRosie = require('./itRosie-tools')
//格式化时间的功能
const dtStr=itRosie.dateFormat(new Date())

console.log(dtStr)
console.log('--------------------')

const htmlStr='<h1 title ="abc">这是h1标签<span>123&nbsp;</span></h1>'

const str=itRosie.htmlEscape(htmlStr)

console.log(str)
console.log('--------------------')


const newStr=itRosie.htmlUnescape(str)

console.log(newStr)