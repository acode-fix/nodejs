const { format} = require('date-fns')
const path = require('path')
const fs = require('fs')
const fsPromise = require('fs').promises
const uuid = require('uuid');
//const { log } = require('util');
// {v4:uuid}
const logEvent =  async(message) => {
     const dateTime  =   `${format(new Date,'yyyy-MM-dd\tHH:mm:ss')}`;
     const   logItem  =   `${dateTime}\t${uuid.v4()}\t${message}\n`;
     console.log(logItem)

     try{

        if(!fs.existsSync(path.join(__dirname,'logs')))
           {
             await  fs.mkdir(path.join(__dirname,'logs'));
           }

        await fsPromise.appendFile(path.join(__dirname,'logs','eventLog.txt'), logItem);

     }
     catch(err)
     {
        console.log(err)
     }


}

module.exports = logEvent;


