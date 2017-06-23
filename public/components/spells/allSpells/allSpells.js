var app = angular.module("BookOfShadowsApp");

app.controller("AllSpellsCtrl", ["$scope", "$http", "AllSpellsService", function ($scope, $http, SpellsService) {
    $scope.spells = [];

    // define and immediately invoke this function when the
    // page loads to get the list of todos from the server
    (function getspells() {
        SpellsService.getSpells().then(function (spells) {
            console.log(spells);
            $scope.spells = spells;
        });
    })();
}]);

app.service("AllSpellsService", ["$http", function ($http) {
    this.getSpells = function () {
        return $http.get("/api/spells").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}]);
