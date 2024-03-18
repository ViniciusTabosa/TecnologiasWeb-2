/**
 * Atividade 01 - Tecnologias Web II
 * 
 * Obs: necessita do móculo ReadlineSync (npm i readline-sync para instalar)
*/


var escolha = require('./controleFuncoes')
var input = require('readline-sync');

console.log(`  
Calculadora
    1 -> Soma
    2 -> Subtracao
    3 -> Multiplicacao
    4 -> Divisão
    5 -> Potencia
    6 -> Teorema de Pitagoras
    7 -> Area de um trapezio
    8 -> Volume de uma esfera`)

let resposta = input.question('Escolha o numero da funcao: ')

console.log(escolha.escolherFuncao(resposta))
