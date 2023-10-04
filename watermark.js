// packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
var require_webflow_brand = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js" (exports, module) {
        var Webflow = require_webflow_lib();
        Webflow.define("brand", module.exports = function($2) {
            var api = {};
            var doc = document;
            var $html = $2("html");
            var $body = $2("body");
            var namespace = ".w-webflow-badge";
            var location = window.location;
            var isPhantom = /PhantomJS/i.test(navigator.userAgent);
            var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
            var brandElement;
            api.ready = function() {
                var shouldBrand = $html.attr("data-wf-status");
                var publishedDomain = $html.attr("data-wf-domain") || "";
                if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
                    shouldBrand = true;
                }
                if (shouldBrand && !isPhantom) {
                    brandElement = brandElement || createBadge();
                    ensureBrand();
                    setTimeout(ensureBrand, 500);
                    $2(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
                }
            };

            // function onFullScreenChange() {
            //     var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
            //     $2(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
            // }

            function createBadge() {
                var $brand = $2('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs");
                var $logoArt = $2("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                    marginRight: "8px",
                    width: "16px"
                });
                var $logoText = $2("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                $brand.append($logoArt, $logoText);
                return $brand[0];
            }

            // function ensureBrand() {
            //     var found = $body.children(namespace);
            //     var match2 = found.length && found.get(0) === brandElement;
            //     var inEditor = Webflow.env("editor");
            //     if (match2) {
            //         if (inEditor) {
            //             found.remove();
            //         }
            //         return;
            //     }
            //     if (found.length) {
            //         found.remove();
            //     }
            //     if (!inEditor) {
            //         $body.append(brandElement);
            //     }
            // }
            return api;
        });
    }
});