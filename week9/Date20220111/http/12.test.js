//在外界使用require导入一个自定义模块的死后，得到的成员就是那个模块中通过module.exports指向的那个对象

const m=require('./11-custommodule')

console.log(m)