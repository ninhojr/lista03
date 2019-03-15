
function cadastrar() {
    let nome = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmar_senha').value;

    if (nome == "" || senha == "" || confirmarSenha == "") {
        alert('Preencha todos os campos!');
    } else {
        if (senha.length >= 6 && senha.length <= 10 && senha == confirmarSenha) {
            document.write('Cadastrado!');
        } else {
            alert('Senha inválida!');
        }
    }
}
