// 导入fs模块
const fs= require('fs')
//1.2导入path模块
const path=require('path')

// 定义正则表达式 分别匹配<style></style>和script标签
const regStyle= /<style>[\s\S]*<\/style>/

const regScript=/<script>[\s\S]*<\/script>/

// 调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname,'/素材/index.html'),'utf8',function(err,dataStr){
    if(err)return console.log('读取HTML文件失败!'+err.message)
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})
// 定义处理css样式的方法
function resolveCSS(htmlStr){
    //3.2使用正则提取需要的内容
    const r1=regStyle.exec(htmlStr)

    // 将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS=r1[0].replace('<style>','').replace('</style>','')
    // 3.4 调用fs.writeFile()方法，将提取的样式，写入到clock目录中 index.css的文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err) return console.log('写入CSS样式失败！'+err.message)
        console.log('写入样式文件成功！')
    })
}
//4.1 定义处理JS脚本的方法
function resolveJS(htmlStr){
    const r2=regScript.exec(htmlStr)
    const newJS=r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err)return console.log('写入JavaScript脚本失败！'+err.message)

        console.log('写入JS脚本成功！')
    })

}
//5.1定义处理HTML结构的方法
function resolveHTML(htmlStr){
    //5.2 将字符串调用replace方法，把内嵌的style和script标签替换为外联的link和script标签
    const newHTML=htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>>').replace(regScript,'<script src="./index.js"></script>')

    //5.3 写入index.html这个文件
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err) return console.log('写入HTML文件失败！'+err.message)
        console.log('写入HTML页面成功！')
    })
}