MathJax.Hub.Config({
    displayAlign: "center",
    "HTML-CSS": {
        linebreaks: {automatic: true, width: getMathJaxWidthInConfig()},
        webFont: "STIX-Web"
    },
    SVG: { linebreaks: { automatic: true,width: getMathJaxWidthInConfig()} },
    tex2jax: {
        inlineMath: [['$$$$$$','$$$$$$']],
        displayMath: [['\\[','\\]']],
        processEscapes: true
    },
    styles: {

        "span.MathJax": {
            "padding-right": "2px"
        }

    }

});




function getMathJaxWidthInConfig() {

    var deviceDetector = (function () {
        var ua = navigator.userAgent.toLowerCase();
        var detect = (function (s) {
            if (s === undefined)s = ua;
            else ua = s.toLowerCase();
            if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua))
                return 'tablet';
            else if (/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(ua))
                return 'phone';
            else return 'desktop';
        });
        return {
            device: detect(),
            detect: detect,
            isMobile: ((detect() != 'desktop') ? true : false),
            userAgent: ua
        };
    }());



    if (deviceDetector.device !='desktop') {

        var w = window.innerWidth,
            h = window.innerHeight,
            offset = 90,
            newWidth = (w < h ? w : h) - offset;
        try {
            if (newWidth > 0) {

                //set width in the config
                return "270px";
            }
        } catch (e) {
            //Default width will be used
            return "680px";

        }
    } else {
        // desktop View
        return "680px";
    }

}
