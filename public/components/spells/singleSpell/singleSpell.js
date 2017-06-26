angular.module("BookOfShadowsApp")

    .controller("SingleSpellCtrl", ["$scope", "AllSpellsService", "$routeParams", function ($scope, AllSpellsService, $routeParams) {
        AllSpellsService.getSpells().then(function (response) {
            for (var i = 0; i < response.length; i++) {
                if (response[i]._id === $routeParams.spellId) {
                    $scope.singleSpell = response[i];
                    console.log($scope.singleSpell);
                }
            }
        });
    }]);