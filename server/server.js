//**************************************************************
//***************** Bearer Authenticatio ***********************
//**************************************************************

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var express = require('express');
var logger = require('morgan');
var path = require('path');


var port = process.env.PORT || '3000';
var app = express();



//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(logger('dev'));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
// console.log(path.resolve(__dirname, '../public'));


//************ Custom Routes ************
require('./config')(app,mongoose);
require('./models')(app,mongoose);
require('./routes')(app, mongoose);



app.listen(port, function () {
    console.log("server is listening on port : ", port);
});