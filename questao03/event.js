function setBackground() {
    let selection = document.getElementById('color');
    let selected = selection.options[selection.selectedIndex].id
    
    switch(selected) {
        case 'green':
            document.getElementById('body').style.backgroundColor = 'green';
            break;
        
        case 'yellow':
            document.getElementById('body').style.backgroundColor = 'yellow';
            break;
        
        case 'blue':
            document.getElementById('body').style.backgroundColor = 'blue';
            break;
        
        case 'red':
            document.getElementById('body').style.backgroundColor = 'red';
            break;
        
        default:
            document.getElementById('body').style.backgroundColor = 'while';
            break;
    }
}