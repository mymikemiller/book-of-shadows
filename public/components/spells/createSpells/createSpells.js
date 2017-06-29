angular.module("BookOfShadowsApp")

    .controller("CreateSpellCtrl", ["$scope", "CreateSpellService", "$location", function ($scope, CreateSpellService, $location) {
        $scope.addSpell = function (spell) {
            CreateSpellService.postNewSpell(spell).then(function (response) {
                console.log("done");
            });
            $location.path("/mine");
        };

        console.log($scope.spell);

        $scope.spell = {ingredients: []};

        $scope.addIngredient = function (ingredient) {
            $scope.spell.ingredients.push(ingredient);
        }

    }])
;