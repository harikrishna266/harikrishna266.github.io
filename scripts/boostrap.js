define(
	[
		'angular',
		'uiRouter'
	],
	function(angular,uiRouter){
		"use strict";
		try{
	 		angular.element(document).ready(function() {
            	angular.bootstrap(document, ['app']);
			});
		}catch(e){
			console.log(e);
		}

})