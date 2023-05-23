var u=require('url')
var addr="https://www.youtube.com?year=2017&month=august"

var q1=u.parse(addr,true)
console.log(q1)
console.log(q1.host)
console.log(q1.pathname)
console.log(q1.query)

//write a node js program to load a simple html file on node js webserver and print its contant as html containt