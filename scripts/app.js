var valor = "";
var base64 = "";
function generate() {
    valor = $('#txt').val();
    if (valor === "") {
        alert('Informe algum valor');
    } else {
        base64 = btoa(valor);

        $('#result').val(base64);
    }
}

function decode() {
    if (valor === "") {
        alert('Informe algum valor');
    } else {
        valor = atob(base64);

        $('#result').val(valor);
    }
}