var today = new Date();
var year = today.getFullYear(); // 년도
var month = today.getMonth();  // 월

document.querySelector('#cal').value = today.getFullYear() + "-" +(today.getMonth() + 1).toString().padStart(2,'0');


var months = [30, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



if(year == 2022 && month == 6) {
    let value = document.createElement('p');
    value.setAttribute('class', 'todo')
    value.innerText = '7/20일 사정식/방학식'
    document.querySelector('#schedule').appendChild(value)
}