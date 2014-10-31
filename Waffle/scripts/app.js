
var app = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", transition:'fade', statusBarStyle: "hidden" });

document.addEventListener('deviceready', function () { 
  StatusBar.hide();
  // hide the splash screen as soon as the app is ready. otherwise
  // Cordova will wait 5 very long seconds to do it for you.
  navigator.splashscreen.hide();
}, false);


        $(document).ready(function() {
            var slider = $("#slider").kendoSlider({
                increaseButtonTitle: "Right",
                decreaseButtonTitle: "Left",
                min: -10,
                max: 10,
                smallStep: 2,
                largeStep: 1
            }).data("kendoSlider");

            $(".eqSlider").kendoSlider({
                orientation: "vertical",
                min: -20,
                max: 20,
                smallStep: 1,
                largeStep: 20,
                showButtons: false
            });
        });
