	var app = angular.module('myapp',['ngRoute']);


	app.config(function($routeProvider){
		$routeProvider
			.when('/',{
				controller:'homecontroller',
				templateUrl:'partials/home.html'
			})
			.when('/about',{
				controller:'aboutcontroller',
				templateUrl:'partials/aboutus.html'
			})
			.when('/contact',{
				controller:'contactcontroller',
				templateUrl:'partials/contact.html'
			})
			.otherwise({
				redirectTo:"/"
			})
	})



	app.controller('homecontroller',function($scope){
			$scope.text = "This is my home page";
	})

	app.controller('aboutcontroller',function($scope){
			$scope.text = "This is my about page";
	})
	app.controller('contactcontroller',function($scope){
			$scope.text = "This is my contact page";
	})