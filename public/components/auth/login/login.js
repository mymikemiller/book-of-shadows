angular.module("Auth")

    .controller("LoginCtrl", ["$scope", "$location", "UserService", "$localStorage", "isLogin", function ($scope, $location, UserService, $localStorage, isLogin) {
        console.log(isLogin.login)
        $scope.$watch($localStorage.token, function(oldValue, newValue) {
            $scope.isUserLoggedIn = ($localStorage.token != undefined);
            console.log("What?", oldValue);
        });
        $scope.login = function (user) {
            UserService.login(user).then(function (response) {
                $location.path("/spells");
            }, function (response) {
                alert(response.data.message);
            });
        }
    }]);