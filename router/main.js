var shell = require("../helpers/shellHelper");
var ProjectController = require("../controllers/project");

module.exports=function(app)
{
	app.get('/',function(req,res){
		res.render('index.html');
	});

	app.post('/api/shell', function(req, res){
		shell.shellHelper.run(req.body.ip, function(data){
			res.send({message: data});
		});
	});

	app.get('/api/projects', function(req, res){
		ProjectController.getAll(function(projects){
			res.send({projects: projects});	
		});
	});

	app.post('/api/projects/save', function(req, res){
		console.log("saving object...");
		console.log(req.body);
		ProjectController.save(req);
		res.send({message: "success"});
	});

	app.get('/about',function(req,res){
		res.render('about.html');
	});
}