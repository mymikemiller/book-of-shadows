angular.module("BookOfShadowsApp")
    .service("CreateSpellService", ["$http", function ($http) {
        this.postNewSpell = function (spell) {
            return $http.post("/api/spells", spell);
        };
    }]);
