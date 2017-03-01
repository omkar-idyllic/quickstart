'use strict';

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine", 'ejs');

//app.use('/api', routes);
routes(app);

app.listen(3000, function(){
	console.log('server started on 3000 port');
});