function cadastrar() {
    let nome1 = document.getElementById('nome1').value;
    let nome2 = document.getElementById('nome2').value;
    let nome3 = document.getElementById('nome3').value;
    let nome4 = document.getElementById('nome4').value;
    let nome5 = document.getElementById('nome5').value;
    
    let array = new Array();
    array.push(nome1, nome2, nome3, nome4, nome5);

    nome1 = document.getElementById('nome1').value = array[4];
    nome2 = document.getElementById('nome2').value = array[3];
    nome3 = document.getElementById('nome3').value = array[2];
    nome4 = document.getElementById('nome4').value = array[1];
    nome5 = document.getElementById('nome5').value = array[0];
}
