var Promise = require('bluebird');
var fs = require('fs');
var stringDoArquivo;
var cont = 0;

function converter($scope) {
    stringDoArquivo = null;
    $scope.questions.forEach(function (question) {
        if (question.inputType === 'text') {
            saveInputText(question);
        }
        if (question.inputType === 'checkbox' && question.value === true) {
            saveInputCheck(question);
        }

        if (question.subQuestions) {
            console.log(question.label.description);
            console.log(question.value);

        }
    }, this);
    console.log(stringDoArquivo);
    fs.writeFile('./TXT/test.txt', stringDoArquivo, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

function separator() {
    console.log('--------------------------------------------');
}

function saveInputText(question) {
    var linha = `Nome: ${question.value} \n`;
    if (!stringDoArquivo) {
        stringDoArquivo = linha;
    }
    else {
        stringDoArquivo += linha;
    }
}

function saveInputCheck(question) {
    var linha = `${question.label.description} ${question.value} \n`;
    if (!stringDoArquivo) {
        stringDoArquivo = linha;
    }
    else {
        stringDoArquivo += linha;
    }
}