var app = angular.module("BookOfShadowsApp");

app.controller("AllSpellsCtrl", ["$scope", "$http", "SpellsService", function ($scope, $http, SpellsService) {
    $scope.spells = [];

    // define and immediately invoke this function when the
    // page loads to get the list of todos from the server
    (function getspells() {
        SpellsService.getSpells().then(function (spells) {
            console.log(spells);
            $scope.spells = spells;
        });
    })();


    $scope.favoriteSpell = function (user, spell) {
        SpellsService.favoriteSpell(user, spell).then(function (spells) {
            //Do nothing with spells. It's a list of strings, not the list of spell objects
        });
    }


}]);

app.service("SpellsService", ["$http", "UserService", function ($http, UserService) {
    this.getSpells = function () {
        return $http.get("/api/spells").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.favoriteSpell = function (spell) {
        console.log("favorite spell");

        var user = UserService.getUser();

        // if the spell is already favorited, remove it from the list and place it at the end.
        var found = false;
        for (var i = 0; i < user.favorites.length; i++) {
            var spellId = user.favorites[i];
            if (spellId == spell._id) {
                console.log("user.favorites before slice:", user.favorites);
                user.favorites.splice(i, 1);
                console.log("Spliced at ", i);
                console.log("user.favorites after slice:", user.favorites);
            }
        }
        user.favorites.push(spell);

        return $http.put("/users/" + user._id, user, {new: true}).then(function (response) {
            UserService.setUser(response.data);
            return response.data.favorites;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    }

}]);
