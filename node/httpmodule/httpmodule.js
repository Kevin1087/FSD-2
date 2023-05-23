var h=require('http')
var server= h.createServer((req,res)=>{
        // res.write("hello server")
        // res.end()

        if(req.url=='/')
        {
            res.write(" home page")
            res.end()
        }
        else if(req.url=='/student'){
            res.write('student page')
            res.end()

        }
        else{
            res.writeHead(404,{'content-type':'text/html'})
            res.end('<h1>404 page not found error</h1>')
        }
    }
)
server.listen(8000)