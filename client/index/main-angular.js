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
                $scope.changeValue = function (value) {
                    if ($scope.parentQuestion) {
                        $scope.parentQuestion[$scope.model] = value;
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

