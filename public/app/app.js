angular.module('easy-push', [])
    .config(function () {
    });

function getUrls(){
	return {

		//for projects
		projects: "data/projects.json",
		push: "api/shell",
		newProject: "api/projects/save",
		getAllProjects: "api/projects"
	};
}

function getContentTypes(){
	return {
		form: {'Content-Type': 'application/x-www-form-urlencoded'},
	};
}