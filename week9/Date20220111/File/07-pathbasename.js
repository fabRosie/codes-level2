const path=require('path')
// 定义文件的存放路径
const fpath='/a/b/c/index.html'

const fullname=path.basename(fpath)

console.log(fullname)

const nameWithoutExt=path.basename(fpath,'.html')
console.log(nameWithoutExt)