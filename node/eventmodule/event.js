var event =require('events')

var ee= new event.EventEmitter()

var handler =function() {
    console.log("hello world")
}

ee.on("scream",handler)
ee.emit("scream")
