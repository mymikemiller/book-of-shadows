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
            .when("/spells/:spellId", {
                templateUrl: "components/spells/singleSpell/singleSpell.html",
                controller: "SingleSpellCtrl"
            })
            .when("/mine", {
                templateUrl: "components/spells/mySpells/mySpells.html",
                controller: "MySpellsCtrl"
            })
            .when("/favorites", {
                templateUrl: "components/spells/favoriteSpells/favoriteSpells.html",
                controller: "FavoriteSpellsCtrl"
            })
            .when("/create-spell", {
                templateUrl: "components/spells/createSpells/createSpells.html",
                controller: "CreateSpellCtrl"
            })
            .when("/login", {
                templateUrl: "components/auth/login/login.html",
                controller: "LoginCtrl"
            })
            .otherwise("/home", {
                redirectTo: "components/home/home.html"
            })
    }]);