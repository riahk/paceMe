angular.module('paceme.timerfact', [])
.factory('Timer', function() {
  return {
    timer: {},
    
    setTimer: function(timer) {
      this.timer = timer;
    },

    firstLoad: true,

    running: false,

    startTimer: function() {
      this.running = true;
    },

    pauseTimer: function() {
      this.running = false;
    }
  };
});
