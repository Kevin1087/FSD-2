var event =require("events")

var ee=new event.EventEmitter()

var connecthandler= function connect(){
    console.log("connection succesfully")

    ee.emit("data-recived")
}

ee.on("connection",connecthandler)

ee.on("data-recievd",()=>{
    console.log("data recived")
})

ee.emit("connection")

console.log("thanks")