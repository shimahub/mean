;(function(){
'use strict';
angular
  .module('meanApp')
  .config(Configuration);

  /* @ngInject */
  function Configuration($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          query: function() { return null; }
        },
      })
      .state('starred', {
        url: '/users/:userId/starred',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          query: function($stateParams) {
            return { stars: $stateParams.userId };
          }
        }
      })
      .state('user', {
        url: '/users/:userId',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          query: function($stateParams) {
            return { user: $stateParams.userId };
          }
        }
      });
  }

}).call(this);
