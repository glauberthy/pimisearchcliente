angular.module('pricipal', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])//nome do modulo = principal

    .config(function ($routeProvider) {
        $routeProvider.when('/pontos', {
            templateUrl:'partials/bloco-index.html',
            controller:'blocos/BlocosController'
        });

        $routeProvider.when('/pontos/form', {
            templateUrl:'partials/bloco-form.html',
            controller:'blocos/BlocosFormController'
        });

        $routeProvider.when('/pontos/edit/:blocoId', {
            templateUrl:'partials/bloco-form.html',
            controller:'blocos/BlocosFormController'
        });
        $routeProvider.when('/notfaoud', {
            templateUrl:'partials/naoencotrado.html',
        });


        $routeProvider.otherwise({redirectTo:'/notfaoud'});
    });