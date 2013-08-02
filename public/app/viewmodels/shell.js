define(['plugins/router', 'durandal/app', 'durandal/viewLocator'], function(router, app, viewLocator) {

	var shell = function() {
		self = this;

		this.router = router;
		this.search = function() {
			//It's really easy to show a message box.
			//You can add custom options too. Also, it returns a promise for the user's response.
			app.showMessage('Search not yet implemented...');
		};

		/*********************/
		/*** NavBar stuff. ***/
		/*********************/

		this.navbarElement = undefined;
		this.setActiveNavButton = function() {
			var activeModuleId = router.activeItem().__moduleId__;
			$.each( self.navbarElement.find('a'), function(index, value) {
				if($(value).attr('moduleId') == activeModuleId) {
					$(value).addClass('ui-btn-active');
				} else {
					$(value).removeClass('ui-btn-active');
				}
			});
		};
		// Register listener.
		router.on('router:navigation:complete', function(module) {
			// If not intialized, then get the navbar element of the shell.
			if (self.navbarElement) {
				self.setActiveNavButton();
			}
		});

		/*********************/

		this.activate = function() {
			router.map([{
				route : '',
				title : 'Welcome',
				moduleId : 'viewmodels/welcome',
				nav : true
			}, {
				route : 'flickr',
				moduleId : 'viewmodels/flickr',
				nav : true
			}]).buildNavigationModel();

			return router.activate();
		};

		this.load = function() {
			console.log("---------- LOAD --------");
		};

		this.attached = function(viewHtml, parent, context) {
			$.mobile.initializePage();

			// Initialize navbarElement.
			self.navbarElement = $(viewHtml).find('[data-role=navbar]');
			self.setActiveNavButton();
		}
	}

	return new shell;
});
