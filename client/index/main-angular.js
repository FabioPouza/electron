'use strict';
angular.module('PackageGenerator', ['ngAnimate', "ngCookies", 'ngRoute', 'ngResource'])
    .directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        };
    }])
    .directive("piQuestion", [function () {
        return {
            restrict: 'E',
            templateUrl: 'client/shared/directives/piQuestion.html',
            controller: function ($scope) {

                $scope.$watch('question.value', function (value) {
                    console.log('ola', value);
                });




                $scope.changeValue = function (value) {
                    if ($scope.parentQuestion) {
                        $scope.parentQuestion[$scope.model] = value;
                        console.log('colocou no parent', value);
                    }
                };
            },
            scope: {
                question: '=',
                model: '=',
                parentQuestion: '='
            }
        };
    }]);

