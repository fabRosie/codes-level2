const http=require('https')

http.get('https://rickandmortyapi.com/api',(res)=>{
    let str=''
    res.on('data',(chunk)=>{
        str+=chunk
    })
    res.on('end',()=>{
        console.log(str)
    })
})