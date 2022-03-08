## 安装
```
npm-install itRosie-tools
```

## 导入
```js
const itRosie=require('itRosie-tools')
```

## 格式化时间

```js
const dtStr=itRosie.dateFormat(new Date())
// 结果 2022-01-12 19:50:34
console.log(dtStr)
```

## 转义HTML中的特殊字符
```js
//待转换的HTML字符串
const htmlStr='<h1 title ="abc">这是h1标签<span>123&nbsp;</span></h1>'
//调用htmlEscape方法进行转换
const str=itRosie.htmlEscape(htmlStr)
//转换的结果 &lt;h1 title =&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原HTML中的特殊字符
```js
//待还原的HTML字符串
const newStr=itRosie.htmlUnescape(str)
//输出的结果 <h1 title ="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(newStr)
```

## 开源协议
ISC