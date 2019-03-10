function mouseOver(color) {
    //alert(color);
    switch(color) {
        case 'green':
            document.getElementById('corpo').style.backgroundColor = 'green';
            break;
        
        case 'yellow':
            document.getElementById('corpo').style.backgroundColor = 'yellow';
            break;
        
        case 'blue':
            document.getElementById('corpo').style.backgroundColor = 'blue';
            break;
        
        case 'white':
            document.getElementById('corpo').style.backgroundColor = 'white';
            break;
        
        default:
            document.getElementById('corpo').style.backgroundColor = 'darkgray';
            break;
    }
}