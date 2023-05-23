var fs=require('fs')

fs.readFile("Hello.txt",function(e,data)
{
    if(e)
    {
        return console.error(e)
    }
    console.log(data.toString())
}
),
console.log("program ended")