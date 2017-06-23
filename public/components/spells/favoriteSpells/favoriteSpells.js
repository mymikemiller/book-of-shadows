var app = angular.module("BookOfShadowsApp");

app.controller("FavoriteSpellsCtrl", ["$scope", "$http", "FavoriteSpellsService", function ($scope, $http, FavoriteSpellsService) {
    $scope.spells = [];

    // define and immediately invoke this function when the
    // page loads to get the list of todos from the server
    (function getFavoriteSpells() {
        FavoriteSpellsService.getFavoriteSpells().then(function (spells) {
            console.log(spells);
            $scope.spells = spells;
        });
    })();

    $scope.unfavoriteSpell = function (user, spell) {
        FavoriteSpellsService.unfavoriteSpell(user, spell);
    }
}]);

app.service("FavoriteSpellsService", ["$http", function ($http) {
    this.getFavoriteSpells = function () {
        return $http.get("/api/spells/favorites").then(function (response) {
            console.log("response.data:", response.data)
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    this.unfavoriteSpell = function (user, spell) {
        console.log("unfavorite spell");
        var index = user.favorites.indexOf(spell);
        console.log("index:", index);
        if (index > -1) {
            user.favorites.splice(index, 1);
        }

        return $http.put("/users", user).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    }
}]);
