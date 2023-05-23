var os = require ('os')
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.freemem())


a1=os.freemem()
console.log(a1/1024/1024/1024)