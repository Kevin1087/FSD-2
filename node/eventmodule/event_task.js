var event= require('events')
var ee=new event.EventEmitter()
var listner1=function listner1(){
    console.log("listener1 executed")
}

var listner2= function listner2(){
    console.log("listener2 executed")

}

ee.on("conn",listner1)
ee.on("conn",listner2)

var count=ee.listenerCount("conn")

console.log(count+"for conn event ")

ee.emit("conn")
ee.removeListener('conn',listner1)

var count=ee.listenerCount("conn")
console.log(count+"for connevent")
ee.emit("conn")





// write node js script create one function name ekder whuch return elder persons objrct details of elder person should be printed in console 