const fs=require('fs');

fs.writeFileSync('reads.txt',"hello")

fs.writeFileSync('reads.txt',"")
fs.appendFileSync('reads.txt',"i am here")
 var data=fs.readFileSync("reads.txt")
 console.log(data.toString())


fs.appendFileSync("reads.txt","\n hi")

fs.mkdirSync("Hello2")
fs.writeFileSync("Hello2/user1.txt","this is created by code")

fs.appendFileSync("Hello2/user1.txt","\n helooo")

fs.renameSync("Hello/user1.txt","Hello/user.txt")
fs.unlinkSync("Hello/user.txt")
fs.unlinkSync("read.txt")

fs.rmdirSync("Hello")


//aply crud in sync way for file module