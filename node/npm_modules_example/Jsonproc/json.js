var ps = require('fs')

var data={"name":"smiling"}

ps.writeFileSync("abc.txt",JSON.stringify(data))

var data1=ps.readFileSync("abc.txt","utf-8")

console.log(data)
console.log(data1)