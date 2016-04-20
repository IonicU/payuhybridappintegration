var example = angular.module('starter', ['ionic', 'ngSanitize']);
example.run(function($ionicPlatform, $timeout) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
example.controller("ExampleController", ['$scope',  function($scope) {
    $scope.testmethod = function() {
        onDeviceReadyTest();
    }
}]);
// Global InAppBrowser reference
var iabRef = null;

//load start event
function iabLoadStart(event) {
   /*  if (event.url.match("https://payu.herokuapp.com/success")) {
       // iabRef.close();
    } */
}


function iabLoadStop(event) {
//checking condition for success URL match with following URL 
//after inappbrowser window load stop
	 if (event.url.match("https://payu.herokuapp.com/success")) {
	//closing inappbrowser window 
	//we can call Rest ApI to checking Transaction details 
      iabRef.close(); 
	   
    }
	
	}
//load error event
function iabLoadError(event) {
    alert(event.type + ' - ' + event.message);
}
//close event
function iabClose(event) {
    iabRef.removeEventListener('loadstart', iabLoadStart);
    iabRef.removeEventListener('loadstop', iabLoadStop);
    iabRef.removeEventListener('loaderror', iabLoadError);
    iabRef.removeEventListener('exit', iabClose);
}
// device APIs are available
//
function onDeviceReadyTest() {
    iabRef = window.open('payuBiz.html', '_blank', 'location=no');
	  iabRef.addEventListener('loadstart', iabLoadStart);
    iabRef.addEventListener('loadstop', iabLoadStop);
    iabRef.addEventListener('loaderror', iabLoadError);
    iabRef.addEventListener('exit', iabClose);
}
