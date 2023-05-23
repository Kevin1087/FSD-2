const { json } = require("stream/consumers")

class person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }

    elder (p){
        if(this.age>p.age){
            return this
        }
        else {
            return p
        }
    }
}

var p1=new person("kevin",20)
var p2=new person("Riya",100)
var p3=p1.elder(p2)

const jsonstr= JSON.stringify(p3)

console.log(p2)

var ps= require('fs')
ps.writeFileSync('d2.txt',jsonstr)


//