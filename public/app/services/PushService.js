angular.module('easy-push')
	.factory('PushService', function($http) {

		return{
			getProjects: function(callBack){
				$http({
	                url: getUrls().projects,
	                method: "GET"
	            }).success(function (data) {
	            	return callBack(data);
	            });
			},

			getAllProjects: function(callBack){
				$http({
	                url: getUrls().getAllProjects,
	                method: "GET"
	            }).success(function (data) {
	            	return callBack(data);
	            });
			},
			
			pushProject: function(formData, callBack){
				$http({
	                url: getUrls().push,
	                method: "POST",
	                data: jQuery.param(formData),
	                headers: getContentTypes().form
	            }).success(function (data) {
	            	return callBack(data);
	            });
			},

			newProject: function(formData, callBack){
				$http({
	                url: getUrls().newProject,
	                method: "POST",
	                data: jQuery.param(formData),
	                headers: getContentTypes().form
	            }).success(function (data) {
	            	return callBack(data);
	            });
			}
			
		};
	});