    const fs = require('fs');


     const rf  = fs.createReadStream('./largefile.txt', {encoding : 'utf8'});
     const wf = fs.createWriteStream('./newLargeFile2.txt');

    //  rf.on('data', (chunk) => {
    //      wf.write(chunk)

    //  })
      rf.pipe(wf)
      console.log('write successfully!')
