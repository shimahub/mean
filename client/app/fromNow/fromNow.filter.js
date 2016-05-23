;(function(){
'use strict';
angular
  .module('meanApp')
  .filter('fromNow', fromNow);

  /* @ngInject */
  function fromNow() {
    return function(input) {
      // From now directive logic
      // ...

      // return 'fromNow filter: ' + input;
      return moment(input).locale(window.navigator.language).fromNow();
    };
  }

}).call(this);
