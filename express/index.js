const express  = require('express')
const app = express()
const  http = require('http')
//const {format} = require('date-fns')
const path = require('path')
//const uuid = require('uuid');
const PORT = process.env.PORT || 5000;


// middleware:    buit-in,custom and  3party
// middle forjson
app.use(express.json)
//middleware for  urlencode
app.use(express.urlencoded({ extended:false}))
//middleware  for sttaic file
app.use(express.static(path.join(__dirname, '/public')))




//route
app.get('/',(req,res) =>  
{
    //res.send('Hello world!')
    //  dend files  asresponse
   // res.sendFile('./views/index.html',{root:__dirname});
    res.sendFile(path.join(__dirname, 'views','index.html'))
})

app.get('/about',(req,res)=>
{
    res.redirect(301,'/contact')
})

//next fn
app.get('/next',(req,res,next)=>
{
    console.log('logged the action here ......')
    next()

},(req,res) => {
     res.send('Next Page dipslayed')
}
)


//  chain next action
const one = (req,res,next) =>{
    console.log('one')
    next()
}

const two = (req,res,)=>{
     console.log('two')
      res.send('finished')
}

app.get('/chain',[one,two])






app.get('/*',(req,res)=>
{
    res.status(404).send('404:not found page')
})









app.listen(PORT,()=> console.log(`server listening on port ${PORT}`) )






//console.log(format(new Date,'yyyy-MM-dd hh:mm:ss') )

//console.log(uuid.v4())

//uuid.v4();


