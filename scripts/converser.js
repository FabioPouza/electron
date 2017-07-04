function converser($scope) {
    $scope.questions.forEach(function (question) {
        if (question.inputType === 'text') {
            console.log(`question: ${question.id || question.$$hashKey}. value: ${question.value}`);
        }
        if (question.inputType === 'checkbox' && question.value === true) {
            console.log(question.label.description);
            console.log('( X )');
        }
        if (question.subQuestions) {
            console.log(question.label.description);
            console.log('foi');
            console.log(question.label.description);
        }
    }, this);
    separator();

}

function separator() {
    console.log('--------------------------------------------');
}