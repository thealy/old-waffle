document.addEventListener('deviceready', function () { 
   
  // hide the splash screen as soon as the app is ready. otherwise
  // Cordova will wait 5 very long seconds to do it for you.
  navigator.splashscreen.hide();
 
  app = new kendo.mobile.Application(document.body, {
     
    // you can change the default transition (slide, zoom or fade)
    transition: 'slide',
     
    // comment out the following line to get a UI which matches the look
    // and feel of the operating system
    skin: 'flat'
  });
 
}, false);
