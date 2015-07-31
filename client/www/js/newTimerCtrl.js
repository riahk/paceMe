angular.module('paceme.newTimer', [])
.controller('NewTimerCtrl', function($scope, Timer) {
  $scope.timer = {
    time: 0, //default time
    minutes: null,
    seconds: null,
    checkpoints: []
  };


  $scope.minutes = 0;
  $scope.seconds = 0;

  //functions to set the timer:
  
  $scope.addSeconds = function() {
    $scope.seconds++;
    if($scope.seconds === 60) {
      $scope.minutes++;
      $scope.seconds = 0;
    }

    $scope.setTime();
  };

  $scope.removeSeconds = function() {
    $scope.seconds--;

    if($scope.seconds < 0) {
      if($scope.minutes >= 1) {
        $scope.minutes--;
        $scope.seconds = 59;
      } else { 
        console.log("you can't go negative!");
        $scope.seconds = 0; 
      }
    }
    $scope.setTime();
  };

  $scope.addMinutes = function() {
    $scope.minutes++;
    $scope.setTime();
  };

  $scope.removeMinutes = function() {
    if($scope.minutes > 0) {
      $scope.minutes--;
    } else if($scope.seconds > 0) {
        $scope.seconds = 0;
    }
    $scope.setTime();
  };

  $scope.setTime = function() {
    $scope.timer.time = ($scope.minutes*60)+$scope.seconds;
    $scope.timer.minutes = $scope.minutes;
    $scope.timer.seconds = $scope.seconds;
  };

  $scope.setCheckpoint = function(cp) {
    console.log(cp);
    $scope.timer.checkpoints.push(cp);
  };

  //save the timer to localStorage:
  $scope.saveTimer = function() {
    if(window.localStorage.hasOwnProperty('timers')) {
      var timers = JSON.parse(window.localStorage['timers']);
    } else {
        var timers = [];
    }

    timers.push($scope.timer);
    window.localStorage['timers'] = JSON.stringify(timers);

  };

});

