const fs=require('fs');
fs.writeFile('./log.txt','hello',(err,data)=>{
    if(err){
        
    }else{
        console.log('文件创建成功')
    }
})//第一个参数 写在哪 第二个参数 写的内容 第三个参数 回调函数 函数第一个参数是err,第二个参数是数据