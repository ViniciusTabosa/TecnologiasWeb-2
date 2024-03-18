/*
    Atividade 01 - Tecnologias Web II
*/

var escolha = require('./controleFuncoes')
var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question(`  
Digite o número da função que deseja executar?\n
    1 -> Soma
    2 -> Subtração
    3 -> Multiplicação
    4 -> Divisão
    5 -> Potência
    6 -> Teorema de Pitágoras
    7 -> Area de um trapézio
    8 -> Volume de uma esfera
`, function(answer) {
    
    escolha.escolherFuncao(answer)
    leitor.close()
});
