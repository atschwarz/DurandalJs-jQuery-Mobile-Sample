## Durandal combined with jQuery Mobile - Sample Application

Due to the lack of such an example, I wrote this project to offer a starting point for mobile application development using jQuery Mobile and Durandal.

## Important things:

* Each viewmodel must call the method "triggerCreate" of the file [routine.js](https://github.com/astahlhofen/DurandalJs-jQuery-Mobile-Sample/blob/master/public/app/utils/routines.js) in its "attached"-method. This is important, because jQuery mobile have to add the css-classes when the view is attached.
* Everything considered to the jQuery Mobile navigation model is turned off by using global configuration parameters inside [lib/jquery.mobile-1.3.2/jqm-config.js](https://github.com/astahlhofen/DurandalJs-jQuery-Mobile-Sample/blob/master/public/lib/jquery.mobile-1.3.2/jqm-config.js).
