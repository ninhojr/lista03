function verificar() {
    let string = document.getElementById('string').value;
    let invertido = string.split('').reverse().join('');
    
    if (string == invertido) {
        document.writeln('A palavra É um palíndromo!');
    } else {
        document.writeln('A palavra NÃO É um palíndromo!');
    }
}