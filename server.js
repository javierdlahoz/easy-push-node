var express=require('express');
var path = require('path');
var shell = require('./helpers/shellHelper');
var bodyParser = require('body-parser')

shell.shellHelper.whoami();

var app=express();
app.use(bodyParser.urlencoded({ extended: false }));

require('./router/main')(app);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

var server=app.listen(9090,function(){
console.log("We have started our server on port 9090");
});