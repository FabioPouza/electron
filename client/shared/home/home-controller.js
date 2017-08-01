"use strict";
angular.module('PackageGenerator')
    .controller('HomeController', ['$scope', '$http', function ($scope, $http) {

        $scope.pis = []

        $http.get('http://localhost:3010/lista')
            .then(function (response) {
                $scope.pis = response.data;
                console.log(response.data);
            });
    }]);