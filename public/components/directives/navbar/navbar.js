angular.module("BookOfShadowsApp")
    .directive("navbar", [function () {
        return {
            restrict: "E",
            templateUrl: "components/directives/navbar/navbar.html"
        }
    }])