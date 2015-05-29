var exec = require('child_process').exec;
exports.shellHelper = {
	whoami: function(){
		exec('whoami', function (error, stdout, stderr) {
		  	console.log(stdout);
		});	
	},
	run: function(file, callback){
		var command = "";
		if(file == "easy-push.sh"){
		    command = "sh " + __dirname +"/../public/shell/" + file;
		}
		else{
		    command = "sudo sh " + __dirname + "/../public/shell/" + file;
		}

		exec(command, function (error, stdout, stderr) {
		  	return callback(stdout);
		});	
	}

}
