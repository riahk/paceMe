angular.module('paceme.timerfact', [])
.factory('Timer', function() {
  return {
    timer: {},

    time: 0,
    
    setTimer: function(timer) {
      this.timer = timer;
      this.time = timer.time;
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
