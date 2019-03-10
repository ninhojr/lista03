function mudarBackground(cor) {
    switch(cor) {
        case 'vermelho':
            document.getElementById('corpo').style.backgroundColor = 'red';
            break;

        case 'verde':
            document.getElementById('corpo').style.backgroundColor = 'green';
            break;

        case 'azul':
            document.getElementById('corpo').style.backgroundColor = 'blue';
            break;

        case 'amarelo':
            document.getElementById('corpo').style.backgroundColor = 'yellow';
            break;
            
        default:
            document.getElementById('corpo').style.backgroundColor = 'black';
            break;
    }
}