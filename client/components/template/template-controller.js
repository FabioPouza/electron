"use strict";
angular.module('PackageGenerator')
    .controller('TemplateController', ['$scope', function ($scope) {

        $scope.questions = [
            { "type": "input", "inputType": "text", "label": { "description": "CÓDIGO DO PROJETO/INCIDENTE:" } },
            { "label": { "description": "DESCRIÇÃO DA MUDANÇA:" } },
            { "type": "input", "inputType": "text" },
            { "label": { "description": "SERVIÇOS AFETADOS:" } },
            { "type": "input", "inputType": "text" },
            { "label": { "description": "Pré-Requisito" } },
            { "label": { "description": "N/A" } },
            {
                "id": "dpcd", "label": { "description": "1.Existe projeto aberto no DPCD" }, subQuestions: [
                    {
                        "id": "naoDpcd", "type": "input", "inputType": "radio", "name": "Dpcd",
                        "label": { "for": "naoDpcd", "description": "Não" }, "ngValue": "Não"
                    },
                    {
                        "id": "naoDpcd", "type": "input", "inputType": "text",
                        "label": { "for": "naoDpcd", "description": "Sim, Informe o numero do projeto" }, "ngValue": "Não"
                    },
                    {},
                ]
            },
            {
                "id": "tratamentoAgencia", "label": { "description": "2.Tratamento nova faixa de código de junção. O aplicativo faz tratamento de codigo de junção de agência no range 1 a 3999" }, subQuestions: [
                    {
                        "id": "tratamentoNao", "type": "input", "inputType": "radio", "name": "tratamento",
                        "label": { "for": "naoTratamento", "description": "Não" }, "ngValue": "Não"
                    },
                    {
                        "id": "tratamentoSimFoi", "type": "input", "inputType": "radio", "name": "tratamento",
                        "label": { "for": "simFoiTratado", "description": "Sim, Já foi alterado para tratar agencia em quanquer range" }, "ngValue": "Sim, Já foi alterado para tratar agencia em quanquer range"
                    },
                    {
                        "id": "tratamentoSimNao", "type": "input", "inputType": "radio", "name": "tratamento",
                        "label": { "for": "simNaoTratado", "description": "Sim, Não foi alterado para tratar agencia em quanquer range" }, "ngValue": "Sim, Não foi alterado para tratar agencia em quanquer range"
                    },
                ]
            },
            { "label": { "description": "3.Ambientes afetados com a mudança" } },
            { "type": "input", "inputType": "checkbox", "label": { "description": "Internet - Servidores" }, "value": true },
            { "label": { "description": "Servidores IBMHttpServer:" } },
            { "type": "textarea", "name": "servidores", "id": "servidores", "rows": "4", "cols": "50" },
            { "label": { "description": "Servidores Fujitsu WebSphere WAS 6.1 IB CTI" } },
            { "type": "textarea", "name": "servidores", "id": "servidores", "rows": "4", "cols": "50" },
            { "label": { "description": "Servidores Windows criptografia:" } },
            { "type": "input", "inputType": "text" },
            { "label": { "description": "Servidores Windows transacional:" } },
            { "type": "input", "inputType": "text" },
            { "label": { "description": "Servidores FAST ESP:" } },
            { "type": "input", "inputType": "text" },
            { "type": "input", "inputType": "checkbox", "label": { "description": "Corporativa - Seridores:" }, "value": true },
            { "type": "input", "inputType": "checkbox", "label": { "description": "Extranet - Servidores" }, "value": true },
            { "type": "input", "inputType": "checkbox", "label": { "description": "Extracorp - Servidores" }, "value": true },
            { "type": "input", "inputType": "checkbox", "label": { "description": "Intranet - Servidores:" }, "value": true },
            { "type": "input", "inputType": "checkbox", "label": { "description": "Departamental - Servidores" }, "value": true },
            { "type": "input", "inputType": "checkbox", "label": { "description": "Outro. Especifique" }, "value": true },
        ];

        $scope.gerar = function () {
            converter($scope);

            //  $scope.questions.forEach(function (question) {
            //      console.log(`question: ${question.id || question.$$hashKey}. value: ${question.value}`);
            //  }, this);
        };

    }]);