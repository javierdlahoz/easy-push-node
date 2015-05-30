var express=require('express');
var path = require('path');
var shell = require('./helpers/shellHelper');
var bodyParser = require('body-parser');
var mongoose = require ("mongoose");

var app=express();
app.use(bodyParser.urlencoded({ extended: false }));

require('./router/main')(app);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

//Mongoose part
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
'mongodb://localhost/easy-push';

mongoose.connect(uristring, function (err, res) {
	if (err) {
		console.log ('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log ('Succeeded connected to: ' + uristring);
	}
});

var server=app.listen(9090,function(){
	console.log("We have started our server on port 9090");
});