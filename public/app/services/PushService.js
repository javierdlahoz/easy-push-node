angular.module('easy-push')
	.factory('PushService', function($http) {

		return{
			getProjects: function(callback){
				$http({
	                url: getUrls().projects,
	                method: "GET"
	            }).success(function (data) {
	            	return callback(data);
	            });
			},

			getAllProjects: function(callback){
				$http({
	                url: getUrls().getAllProjects,
	                method: "GET"
	            }).success(function (data) {
	            	return callback(data);
	            });
			},
			
			pushProject: function(formData, callback){
				$http({
	                url: getUrls().push,
	                method: "POST",
	                data: jQuery.param(formData),
	                headers: getContentTypes().form
	            }).success(function (data) {
	            	return callback(data);
	            });
			},

			newProject: function(formData, callback){
				$http({
	                url: getUrls().newProject,
	                method: "POST",
	                data: jQuery.param(formData),
	                headers: getContentTypes().form
	            }).success(function (data) {
	            	return callback(data);
	            });
			},

			delete: function(formData, callback){
				$http({
	                url: getUrls().deleteProject,
	                method: "POST",
	                data: jQuery.param(formData),
	                headers: getContentTypes().form
	            }).success(function (data) {
	            	return callback(data);
	            });
			}
			
		};
	});