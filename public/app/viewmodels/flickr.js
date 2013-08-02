define(['plugins/http', 'durandal/app', 'knockout', 'utils/routines'], function(http, app, ko, routines) {
	//Note: This module exports an object.
	//That means that every module that "requires" it will get the same object instance.
	//If you wish to be able to create multiple instances, instead export a function.
	//See the "welcome" module for an example of function export.

	return {
		displayName : 'Flickr',
		images : ko.observableArray([]),

		attached : function(viewHtml) {
			routines.triggerCreate(viewHtml);
		},

		activate : function() {
			//the router's activator calls this function and waits for it to complete before proceding
			if (this.images().length > 0) {
				return;
			}

			var that = this;
			return http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', {
				tags : 'mount ranier',
				tagmode : 'any',
				format : 'json'
			}, 'jsoncallback').then(function(response) {
				that.images(response.items);
			});
		},
		select : function(item) {
			//the app model allows easy display of modal dialogs by passing a view model
			//views are usually located by convention, but you an specify it as well with viewUrl
			item.viewUrl = 'views/detail';
			app.showDialog(item);
		}
	};
});
