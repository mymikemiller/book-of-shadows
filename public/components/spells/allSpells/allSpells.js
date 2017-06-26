var app = angular.module("BookOfShadowsApp");

app.controller("AllSpellsCtrl", ["$scope", "$http", "$routeParams", "SpellsService", function ($scope, $http, $routeParams, SpellsService) {
    $scope.spells = [];

    // define and immediately invoke this function when the
    // page loads to get the list of todos from the server
    (function getspells($routeParams) {
        SpellsService.getSpells($routeParams).then(function (spells) {
            $scope.spells = spells;

            if (!spells.length) {
                console.log("Initial spells empty. Initializing with some demo data.");
                $scope.spells = populateDatabase(SpellsService);
            }
        });
    })($routeParams);


    $scope.favoriteSpell = function (user, spell) {
        SpellsService.favoriteSpell(user, spell).then(function (spells) {
            //Do nothing with spells. It's a list of strings, not the list of spell objects
        });
    }


}]);

app.service("SpellsService", ["$http", "UserService", function ($http, UserService) {
    this.getSpells = function (routeParams) {
        // Use "config" to make a query string like this work: .../spells?category=Love%20Spells
        var config = {
            params: routeParams
        }
        return $http.get("/api/spells", config).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.addSpell = function (spell) {
        console.log("Attempting to post", spell);
        return $http.post("/api/spells", spell).then(function (response) {
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
