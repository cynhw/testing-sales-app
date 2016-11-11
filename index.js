// stroing all the var require's up here yo

var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();

// stroing all the app.set and app.use below

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/static'));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

// testing to see if rendering works

app.get('/', function(req, res) {
	res.send('aaaayyyyyyy');
})

// storing controller routes here (eventually)

// connecting to the server and listening to it for days

app.listen(process.envPort || 3000);
console.log('beer forever');