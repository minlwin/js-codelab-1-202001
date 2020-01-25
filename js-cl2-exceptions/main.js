let calculate = function() {

    try {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        let ope = document.getElementById('ope').value
    
        if(!num1 || !num2) {
            throw 'Please Enter Numbers'
        }
        
        let result = 0
    
        switch(ope) {
        case "1":
            result = Number.parseFloat(num1) + Number.parseFloat(num2)
            break
        case "2":
            result = num1 - num2
            break
        case "3":
            result = num1 * num2
            break
        case "4":
            result = num1 / num2
            break
        }
    
        document.getElementById('result').innerText = result
    } catch(e) {
        alert(e)
    }

}

function sample(d1, d2) {
    if(arguments.length == 3) {
        console.log(d1 + d2 + arguments[2])
    } else {
        console.log(d1 + d2)
    }
}

function sum() {

    let value = 0
    for(index in arguments) {
        value += arguments[index]
    }

    return value
}

function outer() {

    function inner() {
        console.log("Inner Function")
    }

    inner()
}