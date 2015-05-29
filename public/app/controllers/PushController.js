angular.module('easy-push')
    .controller('PushController', function ($scope, $http, $rootScope, PushService) {

    	$scope.output = "";
    	$scope.loading = null;
    	
    	$scope.getProjects = function(){
    		PushService.getProjects(function(data){
            	$scope.projects = data.projects;
    		});
    	};
    	
    	$scope.pushAProject = function(projectValue){
    		$scope.loading = true;
    		formData = {
    			file: projectValue
    		};
    		
    		PushService.pushProject(formData, function(data){
    			$scope.loading = false;
    			$scope.output = data.message;
    		});
    	};
    }
);