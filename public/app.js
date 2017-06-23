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
            .when("/myspells", {
                templateUrl: "components/spells/mySpells/mySpells.html",
                controller: "MySpellsCtrl"
            })
            .otherwise("/home", {
                redirectTo: "components/home/home.html"
            })
    }]);