define(function(require) {
    var helper = require('./transitionHelper');

    var settings = {
        inAnimation: 'fadeInLeftBig',
        outAnimation: 'fadeOutRightBig',
        jsOutFallback: function ($previousView, duration) {
            $previousView.animate({ left: '101%' }, duration);
        },
        jsInFallback: function ($newView, duration) {
            $newView.css({ left: '-101%' });
            $newView.animate({ left: '0' }, duration);
        }
    };

    return helper.create(settings);
});