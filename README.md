## Durandal combined with jQuery Mobile - Sample Application

This project offers a starting point for mobile application development using jQuery Mobile and Durandal.

## Important things:

* Each viewmodel must call the method "triggerCreate" of the file "routine.js" in its "attached"-method. This is important, because jQuery mobile have to add the css-classes when the view is attached.
* Everything considered to the jQuery Mobile navigation model is turned off by using global configuration parameters inside "lib/jquery.mobile-1.3.2/jqm-config.js".
