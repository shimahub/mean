;(function(){
'use strict';
angular
  .module('meanApp')
  .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl($scope, $http, socket, Auth, query) {
    $scope.awesomeThings = [];
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $http.get('/api/things', {params: {query: query}}).success(function(awesomeThings) {
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

    $scope.starThing = function(thing) {
      $http.put('/api/things/' + thing._id + '/star').success(function(newThing) {
        $scope.awesomeThings[$scope.awesomeThings.indexOf(thing)] = newThing;
      });
    };

    $scope.unstarThing = function(thing) {
      $http.delete('/api/things/' + thing._id + '/star').success(function(newThing) {
        $scope.awesomeThings[$scope.awesomeThings.indexOf(thing)] = newThing;
      });
    };

    $scope.isMyStar = function(thing) {
      return Auth.isLoggedIn() && thing.stars && thing.stars.indexOf(Auth.getCurrentUser()._id) !== -1;
    };

    $scope.isMyTweet = function(thing){
      return Auth.isLoggedIn() && thing.user && thing.user._id === Auth.getCurrentUser()._id;
    };
  }

}).call(this);
