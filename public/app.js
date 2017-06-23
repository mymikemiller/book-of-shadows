angular.module("BookOfShadowsApp", ["ngRoute", "Auth"])

    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "components/home/home.html",
                controller: "HomeCtrl"
            })
            .when("/spells", {
                templateUrl: "components/spells/spells.html",
                controller: "SpellsCtrl"
            })
            .otherwise("/home", {
                redirectTo: "components/home/home.html"
            })
    }]);