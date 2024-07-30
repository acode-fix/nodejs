const  http = require('http')
const {format} = require('date-fns')
const path = require('path')
const fs = require('fs')
const fsPromise = require('fs').promises
const uuid = require('uuid');

const logEvent = require('./logEvent');
const EventEmitter = require('events');
class myEmitter extends EventEmitter {};

myEmitter =new EventEmitter();
myEmitter.on('log', (msg)=> logEvent(msg) );

// setTimeout(() => {
//     myEmitter.emit('log','log event emitted')
    
// },2000);




const PORT = process.env.PORT || 5000;

const server = http.createServer((req,res)=>{
   //  console.log(req.url,req.method);

let path2;
    if(req.url === '/')
    {

         path2 = path.join(__dirname,'views','index.html');
        res.writeHead(200, {'content-type': 'text/html'});
       // res.write(path2);
        //res.end();

        //     res.statusCode = 200; 
        //     res.setHeader('Content-Type', 'application/html')
        //    // path2 = path.join(__dirname,'views','index.html');
            // const  fl = fs.readFile(path2,'utf-8',(err,data)=>{
            //     res.end(data);
            //     })
            res.write(fs.readFileSync(path2))
            res.end()





    }




});

server.listen(PORT,()=> console.log(`server listening on port ${PORT}`) )






//console.log(format(new Date,'yyyy-MM-dd hh:mm:ss') )

//console.log(uuid.v4())

//uuid.v4();


