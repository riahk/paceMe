angular.module('paceme.timer', [])
.controller('TimerCtrl', function($scope, Timer) {
   $scope.firstLoad = Timer.firstLoad;

  //auto-load the first timer, if there is one in storage
  if($scope.firstLoad && window.localStorage.hasOwnProperty('timers') && JSON.parse(window.localStorage['timers']).length > 0) {
    Timer.setTimer(JSON.parse(window.localStorage['timers'])[0]);
    Timer.firstLoad = false;
  }

  $scope.ourtimer = Timer.timer;
  $scope.timerRunning = false;
  $scope.ourtime = Timer.time;

  $scope.buttonDisplay = 'play';

  $scope.minutes = 0;
  $scope.seconds = 0;
  
  $scope.stopClock = function() {
    $scope.$broadcast('timer-stop');
    $scope.timerRunning = false;
    $scope.buttonDisplay = 'play';
    Timer.pauseTimer();
  };

  $scope.startClock = function() {
    $scope.$broadcast('timer-start');
    $scope.timerRunning = true;
    $scope.buttonDisplay = 'pause';
    Timer.startTimer();
  }

  $scope.playPause = function() {
    if($scope.timerRunning) {
      $scope.stopClock();
    } else { $scope.startClock(); }
  }

  $scope.addTime = function() {
    $scope.seconds++;
    if($scope.seconds === 60) {
      $scope.minutes++;
      $scope.seconds = 0;
    }

  }

  $scope.removeTime = function() {
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

  }

  $scope.tock = false;

  /*$scope.$watch(function(scope) { return scope.$parent.countdown },
                function(newData, oldData) {
                  console.log(newData);
                  console.log($scope.$parent);
                });*/

  $scope.$on('timer-tick', function(event, args) {
    //console.log(Timer.timer);
    //console.log(Timer.timer.checkpoints);
    for(var i = 0; i < Timer.timer.checkpoints.length; i++) {
      if(args.millis === (Timer.timer.checkpoints[i]*1000)) {
        console.log('checkpoint reached!');
        navigator.vibrate(1000);
      }

      if(args.millis === 0) {
        navigator.vibrate(2000);
      }
   }
  });

});
