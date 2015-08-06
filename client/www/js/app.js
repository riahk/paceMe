// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('paceme', ['ionic', 'btford.socket-io', 'paceme.timer', 'timer',
'paceme.timerfact', 'paceme.newTimer', 'paceme.loadTimer',
'paceme.grouptimer', 'paceme.socketfact'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('create', {
    url: '/create',
    templateUrl: 'newTimerView.html',
    controller: 'NewTimerCtrl'
  })

  $stateProvider.state('timer', {
    url: '/',
    templateUrl: 'timerView.html',
    controller: 'TimerCtrl'
  })

  $stateProvider.state('load', {
    cache: false,
    url: '/load',
    templateUrl: 'LoadTimerView.html',
    controller: 'LoadTimerCtrl'
  })

  $stateProvider.state('grouptimer', {
    url: '/grouptimer',
    templateUrl: 'GroupTimerView.html',
    controller: 'GroupTimerCtrl'
  })
});
