function verificarRadio() {
    if (document.getElementById('pessoa').checked) {
        document.getElementById('cpf').style.display = 'block';
        document.getElementById('data_nascimento').style.display = 'block';
        document.getElementById('cnpj').style.display = 'none';
    } else {
        document.getElementById('cnpj').style.display = 'block';
        document.getElementById('cpf').style.display = 'none';
        document.getElementById('data_nascimento').style.display = 'none';
    }
}

function cadastrar() {
    document.writeln('Cadastrado!');
}