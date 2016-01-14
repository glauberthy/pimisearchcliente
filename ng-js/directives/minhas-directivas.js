angular.module('minhasDiretivas', [])
    .directive('painel', function () {
        //Directive Definition Object
        var ddo = {};

        //Atribute Elemment
        ddo.restric = "AE";
        ddo.scope = {
            titulo: '@'
        };
        // transclude mantém os elementos filhos da directiva
        ddo.transclude = true;

        ddo.templateUrl = 'ng-js/directives/painel.html';
        return ddo;
    });