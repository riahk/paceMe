angular.module('paceme.loadTimer', [])
.controller('LoadTimerCtrl', function($scope, Timer, $location, $cordovaToast) {

  $scope.timers = JSON.parse(window.localStorage['timers']);
  //when a timer is clicked, load it and redirect to the timer view
  $scope.loadTimer = function (timer) {
    if(Timer.running) {
      if(ionic.Platform.isAndroid()) {
        $cordovaToast.show("Timer Already Running!", 'short', 'center'); 
      }
      console.log("there's already a timer running!");
    } else {
      Timer.setTimer(timer);
      //redirect to timer view
      $location.path('/');
    }
  };

  //TODO: if user tries to load timer when one is already running, give an alert asking if they really want to load it.

  $scope.clearTimers = function() {
    window.localStorage['timers'] = JSON.stringify([]);
  };

});
