var app = angular.module("BookOfShadowsApp");

app.controller("FavoriteSpellsCtrl", ["$scope", "$http", "FavoriteSpellsService", function ($scope, $http, FavoriteSpellsService) {
    $scope.spells = [];

    // define and immediately invoke this function when the
    // page loads to get the list of todos from the server
    (function getFavoriteSpells() {
        FavoriteSpellsService.getFavoriteSpells().then(function (spells) {
            $scope.spells = spells;
        });
    })();

    $scope.unfavoriteSpell = function (spell) {
        self = this;
        self.spell = spell;
        FavoriteSpellsService.unfavoriteSpell(spell).then(function (spells) {
            // Remove the spell from scope.spells so the spell disappears without requiring a refresh
            for (var i = 0; i < $scope.spells.length; i++) {
                var theSpell = $scope.spells[i];
                if (theSpell._id === self.spell._id) {
                    $scope.spells.splice(i, 1);
                }
            }
        });
    }
}]);

app.service("FavoriteSpellsService", ["$http", "UserService", "$location", function ($http, UserService, $location) {
    this.getFavoriteSpells = function () {
        return $http.get("/api/spells/favorites").then(function (response) {
            return response.data;
        }, function (response) {
            // If there's any error, get the user to log in.
            // This should really only happen if the problem is that the user is not logged in.
            $location.path("/login");
        });
    };
    this.unfavoriteSpell = function (spell) {
        var user = UserService.getUser();
        // find the index of the spell
        for (var i = 0; i < user.favorites.length; i++) {
            var spellId = user.favorites[i];
            if (spellId == spell._id) {
                user.favorites.splice(i, 1);
                break;
            }
        }

        return $http.put("/users/" + user._id, user, {new: true}).then(function (response) {
            UserService.setUser(response.data);
            return response.data.favorites;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    }
}]);
