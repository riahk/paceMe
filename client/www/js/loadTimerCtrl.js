angular.module('paceme.loadTimer', [])
.controller('LoadTimerCtrl', function($scope, Timer, $location) {

  $scope.timers = JSON.parse(window.localStorage['timers']);
  //when a timer is clicked, load it and redirect to the timer view
  $scope.loadTimer = function (timer) {
    Timer.setTimer(timer);
    //redirect to timer view
    $location.path('/');
  };

  $scope.clearTimers = function() {
    window.localStorage['timers'] = JSON.stringify([]);
  };

});
