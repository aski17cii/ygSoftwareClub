var today = new Date();
var year = today.getFullYear(); // 년도
var month = today.getMonth();  // 월
var months = [31,28,31,30,31,30,31,31,30,31,30,31]

printSchedule(year, month)
printCalendar(year, month)

var leftbtn = document.querySelector("#leftbtn")
var rightbtn = document.querySelector("#rightbtn")

leftbtn.addEventListener("click", leftClick)
rightbtn.addEventListener("click", rightClick)

function leftClick() {
    if(month > 0) {
        month -= 1
    } else {
        month = 11
        year -= 1
    }
    printSchedule(year, month)
    printCalendar(year, month)
} 
function rightClick() {
    if(month == 11) {
        month = 0
        year += 1
    } else {
        month += 1
    }
    printSchedule(year, month)
    printCalendar(year, month)
}

function printSchedule(a, b) {
    document.querySelector('#day').innerHTML = `${a}년 ${b+1}월`
    if(a == 2022 && b == 6) {
        document.querySelector('#schedule').innerHTML = "7월 20일 사정회/방학식"
    } else if(a == 2022 && b == 7) {
        document.querySelector('#schedule').innerHTML = "8월 16일 개학식<br>8월 31일 모의수능 (3학년)"
    } else if(a == 2022 && b == 8) {
        document.querySelector('#schedule').innerHTML = "9월 9일 ~ 9월 12일 추석(공휴일)<br>9월 15일 월요일수업으로 변경"
    } else if(a == 2022 && b == 9) {
        document.querySelector('#schedule').innerHTML = "10월 3일 개천절(공휴일)<br>10월 4일 월요일수업으로 변경<br>10월 10일 한글날(대체공휴일)<br>10월 12일 전국연합(3학년)<br>10월 13일 ~ 10월 18일 1차 지필평가<br>10월 24일 ~ 10월 26일 1,2학년 수련활동"
    } else if(a == 2022 && b == 10) {
        document.querySelector('#schedule').innerHTML = "11월 17일 수능<br>11월 21일~ 11월 25일 3학년 2차 지필평가<br>11월 23일 1,2학년 전국연합"
    } else if(a == 2022 && b == 11) {
        document.querySelector('#schedule').innerHTML = "12월 13일 ~ 12월 16일 1,2학년 2차 지필평가<br>12월 28일 사정회"
    } else if(a == 2023 && b == 0) {
        document.querySelector('#schedule').innerHTML = "1월 3일 졸업식/종업식<br>1월 4일 ~ 1월 5일 생기부 최종점검"
    } else if(a == 2023 && b == 2) {
        document.querySelector('#schedule').innerHTML = "3월 2일 입학/개학"
    } else {
        document.querySelector('#schedule').innerHTML = ""
    }
}

function printCalendar (a, b) {
    for(var k=0; k<42; k++) {
        document.querySelector(`#n${k}`).innerHTML = ""
    }
    
    var i = (a-1)*365 + parseInt((a-1)/4) - parseInt((a-1)/100) + parseInt((a-1)/400) + 1 /* a년 1월 1일의 요일*/
    if(a%4 == 0 || a%400 == 0 && a%100 == 0) {
        months[1] = 29
    } else {
        months[1] = 28
    }
    
    for (var n=0; n<month; n++) {
        i += months[n]
    }

    i = i % 7
    for(var j = 1; j <= months[b]; j++) {
        document.querySelector(`#n${i}`).innerHTML = j.toString()
        i++
    }
    
}

