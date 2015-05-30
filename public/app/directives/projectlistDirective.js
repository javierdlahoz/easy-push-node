angular.module('easy-push')

    .directive('projectList', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/views/projectlist.html',
            controller: 'PushController'
        };
    })
    .directive('newProject', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/views/new-project.html',
            controller: 'PushController'
        };
    });