const fs = require('fs');

if(!fs.existsSync('./new') )
  {
      fs.mkdir('./new', (err) => {
           
          if(err) throw err
           console.log('dir created successfully')
      })

  } else{

    fs.rmdir('./new', (err) => {
           
        if(err) throw err
         console.log('dir removed successfully')
    })

  }