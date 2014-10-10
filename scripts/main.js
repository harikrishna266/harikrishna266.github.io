require.config({
	baseURL:"script",
	paths:{
		angular:'http://ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min',
		uiRouter:'http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min',
		domReady:'http://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min'
	},
	shim:{
		'angular':{
			 exports: 'angular'
		},

		'uiRouter':{
			exports: 'uiRouter',
			deps:['angular']
		}
	},
	deps: ['boostrap']
})