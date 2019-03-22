function exibir() {
    let nome1 = document.getElementById('nome1').value;
    let nome2 = document.getElementById('nome2').value;

    let tamanho = nome1.length + nome2.length;
    let string = '';

    for(i = 0; i < tamanho; i++) {
        string += nome1.charAt(i) || ' ';
        string += nome2.charAt(i) || ' ';
    }

    document.getElementById('resultado').value = string;
}
