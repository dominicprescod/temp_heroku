var express     = require('express'),
    app         = express(),
    fs          = require('fs'),
    bodyParser  = require('body-parser'),
    port        = process.env.PORT || 3000,
    pg                = require('pg'),
    sql               = require('knex')({
                          client: 'pg',
                          connection: 'postgres://localhost:5432/dprescod',
                          searchPath: 'dprescod,public'
                        });



    pg.defaults.ssl = (process.env.DATABASE_URL) ? true : undefined;
        pg.connect(process.env.DATABASE_URL || 'postgres://localhost:5432/dprescod', function(er, client) {
          if(er) throw er;


    app.use(bodyParser.json({limit: '50mb'}));

    app.post('/new', function(req, res){
      client.query(sql.insert(req.body).into("stuff").toString())
          .on('end', function(result){
            res.send(req.body)
          });
    });


app.get('/', function(req, res){
  var logs = []
  client.query(sql('stuff').toString())
          .on('row', function(row){
            logs.push(row)
          })
          .on('end', function(result){
            res.send(logs)
          })
})
    app.listen(port, function(){
          console.log("I'm on! :"+port);
        });
      });
