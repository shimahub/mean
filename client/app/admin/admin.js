;(function(){
'use strict';
angular
  .module('meanApp')
  .config(Configuration);
  /* @ngInject */
  
  function Configuration($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  }
  
}).call(this);