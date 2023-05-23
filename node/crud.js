const fs=require('fs')

fs.writeFileSync("Hi.txt","helo this is an example of crud")
var data=fs.readFileSync("Hi.txt")

console.log(data.toString())

fs.appendFileSync("Hi.txt","\n hiiiii")

fs.unlinkSync("Hi.txt")