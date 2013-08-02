$(document).bind("mobileinit", function() {
	console.log("### Config loaded...");
	$.mobile.ajaxEnabled = false;
	$.mobile.linkBindingEnabled = false;
	$.mobile.hashListeningEnabled = false;
	$.mobile.pushStateEnabled = false;
	
	$.mobile.buttonMarkup.hoverDelay = 100;
	
	$.mobile.autoInitializePage = false;
});
