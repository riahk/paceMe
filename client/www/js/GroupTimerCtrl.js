angular.module('paceme.grouptimer', [])
.controller('GroupTimerCtrl', function($scope) {

  $scope.connected = false;

  $scope.timers = JSON.parse(window.localStorage['timers']);

});
