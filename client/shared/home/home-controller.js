"use strict";
angular.module('PackageGenerator')
    .controller('HomeController', ['$scope', '$http', 'uploadPi', '$location', function ($scope, $http, uploadPi, $location) {

        $scope.pis = []

        function carregaListaDePis() {
            $http.get('http://localhost:3010/lista')
                .then(function (response) {
                    $scope.pis = response.data;
                    console.log(response.data);
                });
        }


        $scope.enviar = function () {
            console.log($scope.picFile);

            uploadPi.upload($scope.picFile, $scope.picFile.name)
                .then(function (response) {
                    carregaListaDePis();
                });

        }

        $scope.carregar = function (pi) {
            $location.path("/template/" + pi);
            console.log($scope.piSelecionado);
        }

        carregaListaDePis();
    }]);