var h = require("http")
var ps = require('fs')
var u = require('url')

var addr = "http://localhost:8080/ex.html"
var q = u.parse(addr,true)
data = ps.readFileSync("." +q.pathname)

var server = h.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end()
})

server.listen(5050)