var app = angular.module("BookOfShadowsApp");

app.controller("MySpellsCtrl", ["$scope", "$http", "MySpellsService", function ($scope, $http, MySpellsService) {
    $scope.spells = [];

    // define and immediately invoke this function when the
    // page loads to get the list of todos from the server
    (function getspells() {
        MySpellsService.getMySpells().then(function (spells) {
            $scope.spells = spells;
        });
    })();

    $scope.deleteSpell = function (spell) {
        console.log("attempting to delete", spell);
        MySpellsService.deleteSpell(spell).then(function (spell) {
            // Remove "spell" from scope
            for (var i = 0; i < $scope.spells.length; i++) {
                var theSpell = $scope.spells[i];
                if (theSpell._id === spell._id) {
                    console.log("splicing " + i + " out");
                    $scope.spells.splice(i, 1);
                }
            }
        });
    }
}]);

app.service("MySpellsService", ["$http", function ($http) {
    this.getMySpells = function () {
        return $http.get("/api/spells/mine").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.deleteSpell = function (spell) {
        var url = "/api/spells/" + spell._id;
        console.log("calling http.delete " + url);
        return $http.delete(url).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    }
}]);
