( {
	appDir : 'public',
	baseUrl : 'app',
	dir : 'build',

	name : 'main',

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
			exports : 'jqmConfig'
		},
		'jqm' : {
			deps : ['jqm-conf'],
			exports : 'Mobile'
		}
	}
})