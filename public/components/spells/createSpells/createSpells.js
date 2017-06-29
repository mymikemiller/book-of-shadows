angular.module("BookOfShadowsApp")

    .controller("CreateSpellCtrl", ["$scope", "CreateSpellService", function ($scope, CreateSpellService) {
        $scope.addSpell = function (spell) {
            CreateSpellService.postNewSpell(spell).then(function (response) {
                console.log("done");
            });
        };

        console.log($scope.spell);

        $scope.spell = {ingredients: []};

        $scope.addIngredient = function (ingredient) {
            $scope.spell.ingredients.push(ingredient);
        }

    }]);