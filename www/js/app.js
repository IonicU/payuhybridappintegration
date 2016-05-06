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
    if (event.url.match("https://payu.herokuapp.com/success")) {
        console.log(iabRef);
        iabRef.executeScript({
            code: "document.body.innerHTML"
        }, function(values) {
            //incase values[0] contains result string
            var a = getValue(values[0], 'mihpayid');
            var b = getValue(values[0], 'status');
            var c = getValue(values[0], 'unmappedstatus');
            console.log(a + b + c);//you can capture values from return SURL
            //or
            //incase values[0] contains result string
            // console.log(getValue(values, 'mihpayid'))
        });
  
 // iabRef.close();
  }
}

//get values from inner HTML page i.e success page or failure page values
function getValue(source, key) {
    var pattern = key + '=(\\w+)(&amp;)?';
    var expr = new RegExp(pattern);
    var result = source.match(expr);
    return result[1];
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
