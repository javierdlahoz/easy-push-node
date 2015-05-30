var exec = require('child_process').exec;
exports.shellHelper = {
	whoami: function(){
		exec('whoami', function (error, stdout, stderr) {
		  	console.log(stdout);
		});	
	},
	run: function(ip, callback){
		var command = "cd public/shell; ";
		command += "sudo ssh -o 'StrictHostKeyChecking no' -i aws-ubuntu-server-key.pem ubuntu@"+ 
		 	ip +" 'cd /var/www/public_html; git pull'";

		console.log(command);

		// if(file == "easy-push.sh"){
		//     command = "sh " + __dirname +"/../public/shell/" + file;
		// }
		// else{
		//     command = "sudo sh " + __dirname + "/../public/shell/" + file;
		// }

		exec(command, function (error, stdout, stderr) {
		  	return callback(stdout);
		});	
	}

}
