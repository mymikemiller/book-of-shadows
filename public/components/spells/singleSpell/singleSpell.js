angular.module("BookOfShadowsApp")

    .controller("SingleSpellCtrl", ["$scope", "SpellsService", "$routeParams", function ($scope, SpellsService, $routeParams) {
        SpellsService.getSpells().then(function (response) {
            for (var i = 0; i < response.length; i++) {
                if (response[i]._id === $routeParams.spellId) {
                    $scope.singleSpell = response[i];
                }
            }
        });
    }]);