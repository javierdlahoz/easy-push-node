angular.module('easy-push')
    .controller('PushController', function ($scope, $http, $rootScope, PushService) {

    	$scope.output = "";
    	$scope.loading = null;
        $scope.tab = "projects";
    	
    	$scope.getProjects = function(){
    		PushService.getProjects(function(data){
            	$scope.projects = data.projects;
    		});
    	};
    	
    	$scope.pushAProject = function(ip){
    		$scope.loading = true;
    		formData = {
    			ip: ip
    		};
    		
    		PushService.pushProject(formData, function(data){
    			$scope.loading = false;
    			$scope.output = data.message;
    		});
    	};

        $scope.newProject = function(){
            formData = {
                name: $scope.name,
                ip: $scope.ip,
                version: $scope.version
            };
            
            PushService.newProject(formData, function(data){
                $scope.output = data.message;
                $scope.getAllProjects();
            });
        };

        $scope.getAllProjects = function(){
            PushService.getAllProjects(function(data){
                $scope.projects = data.projects;
            }); 
        };

        $scope.delete = function(id){
            var formData = {
                id: id
            };

            PushService.delete(formData, function(){
                $scope.getAllProjects();
            });
        };
    }
);