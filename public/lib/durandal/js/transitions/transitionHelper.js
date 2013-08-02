define(function(require) {
    var system = require('durandal/system');

    var animationTypes = [
        'bounce',
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',
        'bounceOut',
        'bounceOutDown',
        'bounceOutLeft',
        'bounceOutRight',
        'bounceOutUp',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBight',
        'fadeInUp',
        'fadeInUpBig',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'flash',
        'flip',
        'flipInX',
        'flipInY',
        'flipOutX',
        'flipOutY',
        'hinge',
        'lightSpeedIn',
        'lightSpeedOut',
        'pulse',
        'rollIn',
        'rollOut',
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'rotateOut',
        'rotateOutDownLeft',
        'rotateOutDownRight',
        'rotateOutUpLeft',
        'roateOutUpRight',
        'shake',
        'swing',
        'tada',
        'wiggle',
        'wobble'
    ];

    function animValue(type) {
        if (Object.prototype.toString.call(type) == '[object String]') {
            return type;
        } else {
            return animationTypes[type];
        }
    }

    function ensureSettings(settings) {
        settings.inAnimation = settings.inAnimation || 'fadeInRight';
        settings.outAnimation = settings.outAnimation || 'fadeOut';
        return settings;
    }

    function doTrans(parent, newChild, settings) {
        var outAn = animValue(this.outAnimation),
            inAn = animValue(this.inAnimation),
            $newView = $(newChild).removeClass([outAn, inAn]).addClass('animated');

        return system.defer(function (dfd) {
            function endTransition() {
                dfd.resolve();
            }

            if (!newChild) {
                if (settings.activeView) {
                    $(settings.activeView).addClass(outAn);
                    setTimeout(function () {
                        if (!settings.cacheViews) {
                            ko.virtualElements.emptyNode(parent);
                        }
                        endTransition();
                    }, App.duration);
                } else {
                    if (!settings.cacheViews) {
                        ko.virtualElements.emptyNode(parent);
                    }
                    endTransition();
                }
            } else {
                var $previousView = $(settings.activeView);
                if ($previousView.length) {
                    $previousView.addClass('animated');
                    // slide out old content
                    $previousView.addClass(outAn);

                    if (this.jsOutFallback && App.isNotCss3Compliant()) {
                        $previousView.stop();
                        this.jsOutFallback($previousView, App.duration);
                    }

                    setTimeout(beginEntraceTransition, App.duration);
                } else { beginEntraceTransition(); }
            }

            function beginEntraceTransition() {
                if (settings.cacheViews) {
                    if (settings.composingNewView) {
                        ko.virtualElements.prepend(parent, newChild);
                    }
                } else {
                    ko.virtualElements.emptyNode(parent);
                    ko.virtualElements.prepend(parent, newChild);
                }
                
                $newView.addClass(inAn);

                if (this.jsInFallback && App.isNotCss3Compliant()) {
                    $newView.stop();
                    this.jsInFallback($newView, App.duration);
                }

                setTimeout(endTransition, App.duration);
            }
        }).promise();
    }

    return App = {
        duration: 1000 * .3, // seconds
        isNotCss3Compliant: function () {
            return !!(Modernizr && !Modernizr.csstransitions && !Modernizr.csstransforms);
        },
        create: function (settings) {
            settings = ensureSettings(settings);
            return $.proxy(doTrans, settings);
        }
    };
});