angular.module("BookOfShadows", ["ngRoute"])

    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "components/home/home.html",
                controller: "HomeCtrl"
            })
            .otherwise("/home", {
                redirectTo: "components/home/home.html"
            })
    }]);