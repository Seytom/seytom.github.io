//MODULE
var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource']);

//CUSTOM SERVICES
portfolioApp.service('nameofService', function(){
	
});

//CUSTOM DIRECTIVES
portfolioApp.directive("nameofDirective", function(){
	return	{
		templateUrl: '', 
		replace: true,
		scope: {
			
		}
		
	}

});

//CONTROLLERS
portfolioApp.controller("splashController",["$scope",  function($scope ){
	
	
}]);

portfolioApp.controller("projectController",["$scope",  "$resource", "$routeParams", function($scope, $resource, $routeParams){
		$scope.projectNum = $routeParams.num || '1';
		



}]);

//ROUTING CONFIGURATION
portfolioApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "pages/splash.html",
		controller: "splashController"
	})
	.when("/projects", {
		templateUrl: "pages/projects.html",
		controller: "projectController"
	})
	.when("/project/:num", {
		templateUrl: "pages/project.html",
		controller: "projectController"
	})
    .when("/about",{
        templateUrl: "pages/about.html",
        controller: "splashController"
    })
});