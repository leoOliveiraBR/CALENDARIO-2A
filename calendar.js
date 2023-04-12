function colorirDia(){
    let days  = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let Calendar = document.getElementById('calendar');
    let td    = Calendar.getElementsByTagName('td')[parseInt(days)+5];
    td.style.backgroundColor = color;  
}
