var nome = 'calculando...'

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
    return num1**num2
}

function hipotenusa(a, b){
    return Math.sqrt(a**2 + b**2)
}

function areaTrapezio(B, b, h){
    return ((B+b)*h)/2
}
module.exports = {
    soma,
    sub,
    multi,
    div,
    potencia,
    hipotenusa,
    areaTrapezio,
    nome
}