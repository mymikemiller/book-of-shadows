angular.module("Auth")

    .controller("LoginCtrl", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

        // $scope.isUserLoggedIn = true;
        // $scope.toggle = function () {
        //     $scope.isUserLoggedIn = $scope.isUserLoggedIn === false ? true: false;
        // }
        $scope.login = function (user) {
            
            console.log("user: ", user);
            UserService.login(user).then(function (response) {
                console.log("logged in", response);
                $location.path("/spells");
            }, function (response) {
                alert(response.data.message);
            });
        }
    }]);