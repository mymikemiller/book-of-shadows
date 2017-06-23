angular.module("BookOfShadowsApp", ["ngRoute", "Auth"])

    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "components/home/home.html",
                controller: "HomeCtrl"
            })
            .when("/spells", {
                templateUrl: "components/spells/allSpells/allSpells.html",
                controller: "AllSpellsCtrl"
            })
            .when("/mine", {
                templateUrl: "components/spells/mySpells/mySpells.html",
                controller: "MySpellsCtrl"
            })
            .when("/favoritespells", {
                templateUrl: "components/spells/favoriteSpells/favoriteSpells.html",
                controller: "FavoriteSpellsCtrl"
            })
            .otherwise("/home", {
                redirectTo: "components/home/home.html"
            })
    }]);