
var app = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", transition:'fade', statusBarStyle: "hidden" });

document.addEventListener('deviceready', function () { 
  StatusBar.hide();
  // hide the splash screen as soon as the app is ready. otherwise
  // Cordova will wait 5 very long seconds to do it for you.
  navigator.splashscreen.hide();
}, false);
