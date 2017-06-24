angular.module("Auth")

    .controller("LoginCtrl", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

        $scope.login = function (user) {
            console.log("user: ", user);
            UserService.login(user).then(function (response) {
                console.log("logged in", response);
                $location.path("/");
            }, function (response) {
                alert(response.data.message);
            });
        }
    }]);