  var express = require('express');
  var fs = require('fs');
  const https = require('https');
const { type } = require('os');
  const path = require('path');
const { stringify } = require('querystring');
const http = require('http');
const { json } = require('express');

  app = express();  
    port = process.env.PORT || 4000;
   
     
    app.get('/', (req, res) => {
        fs.readFile('./list.txt', function(err , txt)
        {
           if(err)
               {
                console.log(err);   
                throw err;
                   
               }
           else
               {
                
              var text = txt.toString().split('\r\n');
              res.send(txt);
               }
       }); 
    });
    const sslServer = http.createServer({
        key: fs.readFileSync(path.join(__dirname,'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname,'cert', 'cert.pem')),

     
     
    
    },app);
    app.listen(3000, ()=>console.log('secure server at 3000'));
    
    