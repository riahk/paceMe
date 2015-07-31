angular.module('paceme.timerfact', [])
.factory('Timer', function() {
  return {
    timer: {},
    
    setTimer: function(timer) {
      this.timer = timer;
    },

    firstLoad: true 
  };
});
