var fs=require('fs')

fs.writeFile('a2.txt',"today is hot day",()=>{
    console.log("completed")
})

fs.readFile("a2.txt","utf-8",(e,data)=>{
    console.log(data)
})






// write a node js script to take 5 elements seprated by white space in .txt file,print shorted array of this 5 elemnets on node js server
