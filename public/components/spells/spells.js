var app = angular.module("BookOfShadowsApp");

app.controller("SpellsCtrl", ["$scope", "$http", "SpellsService", function ($scope, $http, SpellsService) {
    $scope.spells = [];

    // define and immediately invoke this function when the
    // page loads to get the list of todos from the server
    (function getTodos() {
        SpellsService.getSpells().then(function (spells) {
            $scope.spells = spells;
        });
    })();
}]);

app.service("SpellsService", ["$http", function ($http) {
    this.getSpells = function () {
        return $http.get("/api/spells").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}]);
