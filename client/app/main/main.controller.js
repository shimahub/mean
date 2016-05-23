;(function(){
'use strict';
angular
  .module('meanApp')
  .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl($scope, $http, socket, Auth) {
    $scope.awesomeThings = [];
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.isMyTweet = function(thing){
      return Auth.isLoggedIn() && thing.user && thing.user._id === Auth.getCurrentUser()._id;
    };
  }

}).call(this);
