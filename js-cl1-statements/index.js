function isEven() {
    let input = document.getElementById("numberInput")
    let value = input.value
    let result

    if(value % 2) {
        result = "Odd Number"
    } else {
        result = "Even Number"
    }

    let result1 = document.getElementById("result1")
    result1.innerText = `${value} is ${result}`
}

function checkMark() {

    let mark = document.getElementById('mark').value
    let result
    
    if(mark == '') {
        document.getElementById('result2').innerText = `Please enter mark!`
        return
    } 
    
    if(mark >= 0 && mark < 40) {
        result = "Fail"
    } else if (mark >= 40 && mark < 80) {
        result = "Pass"
    } else if (mark >= 80 && mark <= 100) {
        result = "Excellent"
    } else {
        result = "Impossible"
    }

    document.getElementById('result2').innerText = `${mark} is ${result}`
}

function checkDay() {
    let day = document.getElementById('day').value
    let result

    switch (day) {
        case 'MON':
        case 'TUE':
        case 'WED':
        case 'THU':
        case 'FRI':
            result = "Week Day"
            break;
        case 'SAT':
        case 'SUN':
            result = "Week End Day"
            break;
        default:
            break;
    }

    document.getElementById('result3').innerText = `${day} is a ${result}`
}

function makeMultiply() {

    let base = document.getElementById('base').value
    let times = document.getElementById('times').value
    let text = ''
    for(let i = 1; i <= times; i ++) {
        let result  = `${base} * ${i} = ${base * i}`
        text = text ? (text + '\n' + result) : result
    }

    document.getElementById('result4').innerText = text
}