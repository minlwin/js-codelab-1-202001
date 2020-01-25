function makeFix() {

    let num = Number.parseFloat(document.getElementById("num").value)
    let fix = Number.parseInt(document.getElementById("fix").value)

    document.getElementById("fixResult").innerText = num.toFixed(fix)

}

window.onload = () => {

    let str = ""

    for(let i = 0; i < 80; i++) {
        str += String.fromCodePoint(0x1f600 + i)
    }

    document.getElementById('emj1').innerText = str

    let mm = ""

    let start = 0x1000

    while(start <= 0x109f) {
        mm += String.fromCodePoint(start)
        start ++
    }

    document.getElementById("myanmar").innerText = mm
}