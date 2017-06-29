var app = angular.module("isLogin", ["Auth"]);

app.service("isLogin", function($localStorage) {
    this.login = $localStorage.token != undefined;
    this.setLogin  = function() {
        console.log("here in login")
        this.login = true;
    };
    this.removeLogin = function() {
        console.log("here in not login")
        this.login = false;
    };
});