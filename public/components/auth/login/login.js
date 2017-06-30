angular.module("Auth").controller("LoginCtrl", [
  "$scope",
  "$location",
  "UserService",
  "$localStorage",
  function($scope, $location, UserService, $localStorage) {
    $scope.$watch(function() {
      return $localStorage.user;
    }, function(newVal, oldVal) {
      $scope.isUserLoggedIn = ($localStorage.token != undefined);
    });
    $scope.login = function(user) {
      UserService.login(user).then(function(response) {
        $location.path("/spells");
      }, function(response) {
        alert(response.data.message);
      });
    }
  }
]);
