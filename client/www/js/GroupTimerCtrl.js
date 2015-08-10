angular.module('paceme.grouptimer', [])
.controller('GroupTimerCtrl', function($scope, Socket) {

  $scope.joined = false;
  $scope.selectedTimer = {};
  $scope.time = 30;
  $scope.invite = '';

  $scope.timers = JSON.parse(window.localStorage['timers']);

  $scope.selectTimer = function(timer) {

    Socket.emit('timer selected', timer);
    //$scope.selectedTimer = timer;
  };

  $scope.joinTimer = function(channelID) {
    console.log(channelID);
    console.log('joining channel...');
    $scope.invite = channelID;
    Socket.emit('timer join', channelID);
  };

  $scope.playPause = function() {
    //$scope.$broadcast('timer-start');
    console.log('alerting other members...');
    Socket.emit('start timer', $scope.invite);
  };

  Socket.on('connect', function() {
    console.log('connected!');
  });

  Socket.on('timer received', function(data) {
    console.log('timer received!');
    console.log(data);
  });

  Socket.on('timer started', function() {
    console.log('starting timer');
    $scope.$broadcast('timer-start');
  });

  Socket.on('timer connect', function(channel) {
    console.log('joined timer');
    console.log(channel);
    $scope.invite = channel;
  });

  Socket.on('joined', function(timer) {
    $scope.joined = true;
    $scope.selectedTimer = timer;
    console.log(timer.time);
    $scope.time = timer.time;
    $scope.$apply();
    console.log(timer);
  });

  Socket.on('alert', function(msg) {
    console.log(msg);
  });

});
