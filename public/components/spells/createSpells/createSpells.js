angular.module("BookOfShadowsApp")

.controller("CreateSpellCtrl", ["$scope", "CreateSpellService", function ($scope, CreateSpellService) {
    $scope.addSpell = function (spell) {
        CreateSpellService.postNewSpell(spell).then(function (response) {
            console.log("done");
        });
    };
}]);