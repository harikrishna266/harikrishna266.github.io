	var app = angular.module('myapp',['ui.router']);


	app.config(function($stateProvider,$urlRouterProvider){
		
		$stateProvider
			.state('home',{
				url:'/',
				controller:'homecontroller',
				templateUrl:'partials/home/home.html'
			})
			.state('home.about',{
				url:'about',
				controller:'aboutcontroller',
				templateUrl:'partials/home/about.html'
			})
			.state('about.facebook',{
				url:'facebook',
				controller:'aboutcontroller',
				templateUrl:'partials/home/facebook.html'
			})

	//	$urlRouterProvider.otherwise('/');	
		// $routeProvider
		// 	.when('/',{
		// 		controller:'homecontroller',
		// 		templateUrl:'partials/home.html'
		// 	})
		// 	.when('/about',{
		// 		controller:'aboutcontroller',
		// 		templateUrl:'partials/aboutus.html'
		// 	})
		// 	.when('/contact',{
		// 		controller:'contactcontroller',
		// 		templateUrl:'partials/contact.html'
		// 	})
		// 	.otherwise({
		// 		redirectTo:"/"
		// 	})
	})



	app.controller('homecontroller',function($scope){
			
			//$scope.text = "This is my home page";
	})

	app.controller('aboutcontroller',function($scope){
			$scope.text = "This is my about page";
	})
	app.controller('contactcontroller',function($scope){
			$scope.text = "This is my contact page";
	})