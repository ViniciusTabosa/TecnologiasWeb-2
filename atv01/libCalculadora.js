function soma(num1, num2){
    return num1+num2
}

function sub(num1, num2){
    return num1-num2
}

function multi(num1, num2){
    return num1*num2
}

function div(num1, num2){
    return num1/num2
}

function potencia(num1, num2){
    return Math.pow(num1, num2)
}

function hipotenusa(a, b){
    return Math.sqrt(a**2 + b**2)
}

function areaTrapezio(bmaior, bmenor, h){
    return ((bmaior+bmenor)*h)/2
}

function volumeEsfera(r){
    return (4 * Math.PI * Math.pow(r, 3))/3
}

module.exports = {
    soma,
    sub,
    multi,
    div,
    potencia,
    hipotenusa,
    areaTrapezio,
    volumeEsfera
}