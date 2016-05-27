;(function(){
'use strict';
angular
  .module('meanApp')
  .controller('NavbarCtrl', NavbarCtrl);

  /* @ngInject */
  function NavbarCtrl($scope, $location, Auth) {
    $scope.menu = [{
      // 'title': 'Home',
      // 'link': '/'
      'title': 'All',
      'link': function() { return '/'; },
      'show': function() { return true; }
    },
    {
      'title': 'Mine',
      'link': function() { return '/users/' + Auth.getCurrentUser()._id; },
      'show': Auth.isLoggedIn
    },
    {
      'title': 'Starred',
      'link': function() { return '/users/' + Auth.getCurrentUser()._id + '/starred'; },
      'show': Auth.isLoggedIn
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }

}).call(this);
