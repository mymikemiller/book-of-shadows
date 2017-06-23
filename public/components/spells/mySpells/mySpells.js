var app = angular.module("BookOfShadowsApp");

app.controller("MySpellsCtrl", ["$scope", "$http", "MySpellsService", function ($scope, $http, MySpellsService) {
    $scope.spells = [];

    // define and immediately invoke this function when the
    // page loads to get the list of todos from the server
    (function getspells() {
        MySpellsService.getMySpells().then(function (spells) {
            console.log(spells);
            $scope.spells = spells;
        });
    })();
}]);

app.service("MySpellsService", ["$http", function ($http) {
    this.getMySpells = function () {
        return $http.get("/api/spells/mine").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.favoriteSpell = function (user, spell) {
        user.favorites.push(spell._id);
        return $http.put("/users", user).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    }
}]);
