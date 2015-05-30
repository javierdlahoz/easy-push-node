var Project = require("../entities/project");

var ProjectController = {
	save: function(request){
		project = new Project({
			name: request.body.name,
			ip: request.body.ip,
			version: request.body.version
		});
		project.save();
	},
	
	getAll: function(callback){
		Project.find(function(err, data){
			return callback(data);
		});
	},

	delete: function(id){
		Project.remove({"_id": id}, function(err){
			console.log(err);
		});
	}
};

module.exports = ProjectController;