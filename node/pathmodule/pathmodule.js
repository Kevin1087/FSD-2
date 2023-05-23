var pm = require('path')
path1="F:/sem4(fsd-2)/node/a2.txt"

console.log(pm.dirname(path1))

console.log(pm.extname(path1))
console.log(pm.basename(path1))

path2=pm.parse(path1)
console.log(path2)
console.log(path2.root)
console.log(path2.dir)
console.log(path2.base)
console.log(path2.ext)
console.log(path2.name)