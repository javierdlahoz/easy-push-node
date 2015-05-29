angular.module('easy-push', [])
    .config(function () {
    });

function getUrls(){
	return {

		//for projects
		projects: "data/projects.json",
		push: "api/shell",
	};
}

function getContentTypes(){
	return {
		form: {'Content-Type': 'application/x-www-form-urlencoded'},
	};
}