"use strict";
angular.module('PackageGenerator')
    .controller('HomeController', ['$scope', '$http', 'uploadPi', function ($scope, $http, uploadPi) {

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

        carregaListaDePis();
    }]);