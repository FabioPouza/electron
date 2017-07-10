var Promise = require('bluebird');
var fs = require('fs');
var stringDoArquivo;
var cont = 0;

function converter($scope) {
    stringDoArquivo = null;
    $scope.questions.forEach(function (question) {
        if (question.label) {
            saveInputLabel(question);
            console.log(question.label.description);
        }
        // if (question.inputType === 'text') {
        //     saveInputText(question);
        // }

        if (question.inputType === 'checkbox' && question.value === true) {
            saveInputCheck(question);
            //console.log(question.value);
        }
        if (question.subQuestions) {
            //saveInputRadio(question);
            //console.log(question.label.description);
            console.log(question.value);
        }
    }, this);
    fs.writeFile('./TXT/test.txt', stringDoArquivo, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            //console.log(result);
        }
    });
}

function separator() {
    console.log('--------------------------------------------');
}

function saveInputText(question) {
    var linha = `${question.label.description} ${question.value} \n`;
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

function saveInputLabel(question) {
    var linha = `${question.label.description} \n`;
    if (!stringDoArquivo) {
        stringDoArquivo = linha;
    }
    else {
        stringDoArquivo += linha;
    }
}

function saveInputRadio(question) {
    var linha = `${question.value} \n`;
    if (!stringDoArquivo) {
        stringDoArquivo = linha;
    }
    else {
        stringDoArquivo += linha;
    }
}