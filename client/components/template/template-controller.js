"use strict";
angular.module('PackageGenerator')
    .controller('TemplateController', ['$scope', '$http', function ($scope, $http) {


        $http.get('http://10.100.78.21/template/template.json',
            {
                headers: { 'Content-Type': 'application/json' },
                encoding: null
            })
            .then(function (response) {
                $scope.questions = response.data;
                console.log(response.data);
            });

        $scope.gerar = function () {
            converter($scope);

            //  $scope.questions.forEach(function (question) {
            //      console.log(`question: ${question.id || question.$$hashKey}. value: ${question.value}`);
            //  }, this);
        };

    }]);