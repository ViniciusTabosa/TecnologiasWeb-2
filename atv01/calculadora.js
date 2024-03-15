/*
    Atividade 01 - Tecnologias Web II
*/

var calc = require('./calculadora')

console.log(`Soma: ${calc.soma(2,3)}`)
console.log(`Subtração: ${calc.sub(10,3)}`)
console.log(`Multiplicação: ${calc.multi(2,10)}`)
console.log(`Divisão: ${calc.div(10,2)}`)
console.log(`Potência: ${calc.potencia(10,2)}`)
console.log(`Hipotenusa: ${calc.hipotenusa(3, 4)}`)
console.log(`Area do trapézio: ${calc.areaTrapezio(6, 3, 4)} \n`)

console.log(calc.nome)