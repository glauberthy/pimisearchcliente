angular.module('pricipal').controller('departamentos/DepartamentoFormController', function ($scope, $http, $routeParams) {
    var baseApi = 'http://localhost:8090/v1/';
    var servico = 'schbloco';
    $scope.bloco = {};
    $scope.mensagem = '';
    if ($routeParams.blocoId) {
        recuperarParaEditar(baseApi + servico + '/' + $routeParams.blocoId);
    }
    $scope.submeter = function () {
        //console.log($scope.bloco);
        //return;
        if ($scope.blocoform.$valid) {
            if ($scope.bloco.id) {
                salvar($scope.bloco.id);
            } else {
                salvar(0);
            }
        }
        //console.log($scope.bloco);
    };

    function salvar(id) {
        if (id > 0) {
            $http.put(baseApi + servico + '/' + id, $scope.bloco)
                .success(function (dados) {
                    $scope.mensagem = 'Bloco Alterado com sucesso';
                }).error(function (error) {
                    $scope.mensagem = 'Não foi possivel Alterar o Bloco';
                });
        } else {
            $http.post(baseApi + servico, $scope.bloco)
                .success(function (dados) {
                    $scope.mensagem = 'Bloco cadastrado com sucesso';
                }).error(function (error) {
                    $scope.mensagem = 'Não foi possivel cadastrado o Bloco';
                });
        }
    }

    function recuperarParaEditar(url){
        $http.get(url).success(function (bloco) {
            $scope.bloco = bloco;
        }).error(function (error) {
            console.log(error);
        });
    }
});