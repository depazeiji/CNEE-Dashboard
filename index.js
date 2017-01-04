var express = require('express');
var http = require('http');
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

app.get('/', function(req, res){
  res.render("chart");
    //res.render('prueba');
});

app.get('/cantidad', function(req, res){
  res.render("cantidad");
    //res.render('prueba');
});

app.get('/tiempo', function(req, res){
  res.render("tiempo");
    //res.render('prueba');
});

//NPM Module to integrate Handlerbars UI template engine with Express
var exphbs  = require('express-handlebars');

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Defining middleware to serve static files
app.use('/public', express.static('public'));
app.get("/fuelPrices", function(req, res){
  getData(res);
});
app.get("/chart", function(req, res){
  res.render("chart");
});

app.get('/datos', function(req, res){
  /*var options = {
    host: "ec2-52-42-150-14.us-west-2.compute.amazonaws.com",
    port: 8080,
    path: '/api/cantidadInterrupciones?apiVersion=1',
    method: 'GET'
    };

        http.request(options, function(resp) {
          resp.setEncoding('utf8');
          resp.on('data', function (chunk) {
            res = JSON.parse(chunk);
            console.log('BODY: ' + JSON.stringify(res.dataset));
          });
        }).end();*/
        res = "JJ";
});

app.get('/pagdinamica', function(req, res){
    res.render('dinamica', {
        name: "CNEE app",
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
