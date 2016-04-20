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
        onDeviceReadyEWEWE();
    }
}]);
// Global InAppBrowser reference
var iabRef = null;

function iabLoadStart(event) {
   /*  if (event.url.match("https://payu.herokuapp.com/success")) {
        alert("success");
	httpGet("https://payu.herokuapp.com/success");
       // iabRef.close();
    } */
}






function iabLoadStop(event) {
	
	console.log(event);
	console.log(event.type + ' - ' + event.url);
	 if (event.url.match("https://payu.herokuapp.com/success")) {
		 console.log(iabRef);
        alert("success");
		
		
		
		
     // iabRef.close(); 
	   
    }
	
	}

function iabLoadError(event) {
    alert(event.type + ' - ' + event.message);
}

function iabClose(event) {
    alert(event.type);
    iabRef.removeEventListener('loadstart', iabLoadStart);
    iabRef.removeEventListener('loadstop', iabLoadStop);
    iabRef.removeEventListener('loaderror', iabLoadError);
    iabRef.removeEventListener('exit', iabClose);
}
// device APIs are available
//
function onDeviceReadyEWEWE() {
    iabRef = window.open('payuBiz.html', '_blank', 'location=no');
	iabRef.addEventListener('loadstart', iabLoadStart);
    iabRef.addEventListener('loadstop', iabLoadStop);
    iabRef.addEventListener('loaderror', iabLoadError);
    iabRef.addEventListener('exit', iabClose);
}