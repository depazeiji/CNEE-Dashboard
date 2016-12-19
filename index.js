var express = require('express');
var app = express();

/*var things = require('./routes/index.js');

app.use('/', function(req, res, next){
  console.log("A request for things received at " + Date.now());
  next();
});

app.use('/', things);*/
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/pagina', function(req, res){
    res.render('prueba');
});

app.get('/pagdinamica', function(req, res){
    res.render('dinamica', {
        name: "Eiji app",
        url:"http://www.henrypi.com"
    });
});

app.get('/pagdinamica2', function(req, res){
  res.render('dinamicaobj',{user:
      {name: "Ayush", age: "20"}
  });
});

app.get('/components', function(req, res){
    res.render('content');
});


app.listen(3000);
