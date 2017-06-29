angular.module("BookOfShadowsApp")
    .directive("loginNavbar", [function () {
        return {
            restrict: "E",
            templateUrl: "components/directives/loginNavbar/loginNavbar.html"
        }
    }])