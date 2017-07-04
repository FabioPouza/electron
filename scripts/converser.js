var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));
var promiseDoArquivo;

function converser($scope) {
    $scope.questions.forEach(function (question) {
        if (question.inputType === 'text') {
            console.log(`question: ${question.id || question.$$hashKey}. value: ${question.value}`);
            save(question);
        }
        if (question.inputType === 'checkbox' && question.value === true) {
            oi(question);
            console.log(question.label.description);
            console.log('( X )');
        }

        if (question.subQuestions) {
            console.log(question.label.description);
            console.log(question.value);

        }
    }, this);
    separator();

}

function separator() {
    console.log('--------------------------------------------');
}

function save(question) {
    var promiseDoAppend = fs.appendFileAsync('./TXT/teste.txt', `Nome: ${question.value} \n`);
    if (!promiseDoArquivo) {
        promiseDoArquivo = promiseDoAppend;
    }
    else {
        promiseDoArquivo
            .then(() => {
                console.log('The "data to append" was appended to file!');
                return promiseDoPrimeiroAppend;
            })
            .catch((err) => {
                
            })
    }
}

function oi(question) {
    fs.appendFile('./TXT/teste.txt', `${question.label.description} ( X ) \n`, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
}