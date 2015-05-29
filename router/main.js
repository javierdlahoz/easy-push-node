var shell = require("../helpers/shellHelper");

module.exports=function(app)
{
	app.get('/',function(req,res){
		res.render('index.html')
	});

	app.post('/api/shell', function(req, res){
		shell.shellHelper.run(req.body.file, function(data){
			res.send({message: data});
		});
	});

	app.get('/about',function(req,res){
		res.render('about.html');
	});
}