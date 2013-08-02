requirejs.config({
	paths : {
		'text' : '../lib/require/text',
		'durandal' : '../lib/durandal/js',
		'plugins' : '../lib/durandal/js/plugins',
		'transitions' : '../lib/durandal/js/transitions',
		'knockout' : '../lib/knockout/knockout-2.2.1',
		'bootstrap' : '../lib/bootstrap/js/bootstrap',
		'jquery' : '../lib/jquery/jquery-1.9.1',
		'jqm' : '../lib/jquery.mobile-1.3.2/jquery.mobile-1.3.2',
		'jqm-conf' : '../lib/jquery.mobile-1.3.2/jqm-config'
	},
	shim : {
		'jqm-conf' : {
			deps : ['jquery'],
			exports: 'jqmConfig'
		},
		'jqm' : {
			deps : ['jqm-conf'],
			exports : 'Mobile'
		}
	}
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function(system, app, viewLocator) {
	//>>excludeStart("build", true);
	system.debug(true);
	//>>excludeEnd("build");

	// Load jQuery Mobile.
	require(['jqm'], function(jqm) {
		console.log("jQuery Mobile loaded...");
	});

	app.title = 'Durandal Starter Kit';

	app.configurePlugins({
		router : true,
		dialog : true,
		widget : true
	});

	app.start().then(function() {
		//Replace 'viewmodels' in the moduleId with 'views' to locate the view.
		//Look for partial views in a 'views' folder in the root.
		viewLocator.useConvention();

		//Show the app by setting the root view model for our application with a transition.
		app.setRoot('viewmodels/shell', 'entrance');
	});
});
