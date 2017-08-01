"use strict";
angular.module('PackageGenerator')
    .controller('AppController', ['$scope', function ($scope) {

        $scope.templateUrl = "client/components/template/template.html";
        $scope.home = "client/shared/home/home.html";
    }]);
