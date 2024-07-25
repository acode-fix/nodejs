
console.log('Hello world')
//console.log(global)

const os =  require('os');

// console.log(os.type());
// console.log(os.homedir());
// console.log(os.version());

//console.log(__dirname)
//console.log(__dirname)

const path = require('path')
// console.log(path.dirname(__dirname))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

console.log( path.parse(__filename).root )

//const math = require('./math')
const  {add,subtract} = require('./math')
 
console.log(add(3,7))
console.log(subtract(10,7))
//console.log(math.add(3,7))

