var express     = require('express'),
    app         = exppress(),
    fs          = require('fs'),
    bodyParser  = require('body-parser')
    port        = process.ENV.port || 3000;



    app.use(bodyParser.json({limit: '50mb'}));

    app.post('/new', function(req, res){
      fs.writeFileSync('./file.json', JSON.stringify(req.body), 'utf-8')
      res.send(req.body)
    })
    app.listen(port, function(){
      console.log("I'm on")
    })
