angular.module("Auth", ["ngRoute", "ngStorage"])

    .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
        $routeProvider
            .when("/signup", {
                templateUrl: "components/auth/signup/signup.html",
                controller: "SignupCtrl"
            })
            .when("/login", {
                templateUrl: "components/auth/login/login.html",
                controller: "LoginCtrl"
            })
            .when("/logout", {
                template: "",
                controller: "LogoutCtrl"
            });

        $httpProvider.interceptors.push("AuthInterceptor");
    }])

    .service("UserService", ["$http", "TokenService", "$location", "$localStorage", function ($http, TokenService, $location, $localStorage) {
        this.currentUser = null;
        var self = this;
        this.signup = function (user) {
            return $http.post("/auth/signup", user);
        };

        this.login = function (user) {
            return $http.post("/auth/login", user).then(function (response) {
                TokenService.setToken(response.data.token);
                self.setUser(response.data.user);
                return response;
            })
        };

        this.logout = function () {
            console.log("UserService.logout");
            TokenService.removeToken();
            this.removeUser();
            $location.path("/");
            $localStorage.user = null;
        };

        this.setUser = function (user) {
            console.log("setUser", user);
            $localStorage.user = user;
        };

        this.getUser = function () {
            console.log("getUser", this.currentUser);
            return $localStorage.user;
        }

        this.removeUser = function () {
            $localStorage.user = null;
        }
    }])

    .service("TokenService", ["$localStorage", function ($localStorage) {
        this.setToken = function (token) {
            $localStorage.token = token;
        };

        this.getToken = function () {
            return $localStorage.token;
        }

        this.removeToken = function () {
            delete $localStorage.token;
        }
    }])

    .service("AuthInterceptor", ["$q", "TokenService", "$location", function ($q, TokenService, $location) {
        this.request = function (config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }
            return config;
        };

        this.responseError = function (response) {
            if (response.status === 401) {
                TokenService.removeToken();
                $location.path("/login");
            }

            return $q.reject(response);
        }
    }]);
