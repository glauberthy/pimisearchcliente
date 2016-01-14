angular.module('pricipal').controller('departamentos/DepartamentoListagemController', function ($scope, $http) {
    $scope.blocos = [];
    var baseApi = 'http://localhost:8090/v1/';
    var servico = 'schbloco';
    apiLoad(baseApi+servico);
    function apiLoad(urlApi) {
        $http.get(urlApi).success(function (dados) {
            $scope.blocos = dados._embedded.schbloco;
            var pages = [];
            for (var i = 1; i <= dados.page_count; i++) {
                pages.push({'page_url': baseApi+servico+'?page='+i,'page':i});
            }
            $scope.pages = pages;
            $scope.page_count = dados.page_count;
            $scope.page_first = dados._links.first.href;
            $scope.page_last = dados._links.last.href;
            $scope.page = dados.page;

        }).error(function (error) {
            console.log(error);
        });
    }

    $scope.apiLoad = apiLoad;


    $scope.remover = function (bloco) {
        $http.delete(baseApi + servico+"/"+bloco.id)
            .success(function (dados) {
                $scope.blocos.splice( $scope.blocos.indexOf(bloco),1); // remove da lista
                $scope.mensagem = 'Bloco Removido com sucesso';
            }).error(function (error) {
                $scope.mensagem = 'Não foi possivel REMOVER o Bloco';
            });
    };

});