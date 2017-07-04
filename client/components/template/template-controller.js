"use strict";
angular.module('PackageGenerator')
    .controller('TemplateController', ['$scope', function ($scope) {

        $scope.questions = [
            { type: 'input', inputType: 'text', placeholder: 'nome', value: 'nomePadrao' },
            { type: 'input', inputType: 'password', placeholder: 'senha', },
            { type: 'input', inputType: 'checkbox', label: { description: 'Deseja gerar um TEXTÃO?' }, value: true },
            {
                id: 'versao-was', label: { description: 'Versão do WebSphere:' }, subQuestions: [
                    {
                        id: 'versao-was6.1', type: 'input', inputType: 'radio', name: 'versao-was',
                        label: { for: 'versao-was6.1', description: '6.1' }, ngValue: '6.1',
                    },
                    {
                        id: 'versao-was8.5', type: 'input', inputType: 'radio', name: 'versao-was',
                        label: { for: 'versao-was8.5', description: '8.5' }, ngValue: '8.5',
                    },
                ]
            },
        ];

        $scope.gerar = function () {
            $scope.questions.forEach(function (question) {
                console.log(`question: ${question.id || question.$$hashKey}. value: ${question.value}`);
            }, this);
        };

    }]);