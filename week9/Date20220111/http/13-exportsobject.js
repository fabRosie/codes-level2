// console.log(exports)

// console.log(module.exports)

// console.log(exports === module.exports)

const username='zs'
module.exports.username=username
exports.age=20
exports.sayHello=function(){
    console.log('Hello')
}

//最终向外共享的结果永远都是module.exports所指向的对象