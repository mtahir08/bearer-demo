angular.module('BearerApp')
    .config(
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "../views/dashboard.html",
                controller: 'dashboardController'
            });
    });