var message=function(){
    console.log("This message is shown after 3 seconds")
}

setTimeout(message,5000);

// this is an exapmle of setTimeout for annonimus function

setTimeout(function()
{
console.log("this is shown after 3 seconds")
},3000)