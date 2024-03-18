var funcao = require('./libCalculadora')
var readline = require('readline');

function escolherFuncao(n){
    switch (n){
        case '1': //soma
            leitor = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            leitor.question('Digite o primeiro valor: ', function(answer){
                let v1 = answer
            })
            console.log('escolhido opção 1');
            break;
        case '2': //subtração
            console.log('escolhido opção 2');
            break;
        case '3': //multiplicação
            console.log('escolhido opção 3');
            break;
        case '4': //divisão
            console.log('escolhido opção 4');
            break;
        case '5': //potência
            console.log('escolhido opção 5');
            break;
        case '6': //hipotenusa - c = sqrt(a**2 + b**2)
            console.log('escolhido opção 6');
            break;
        case '7': //área do trapézio - ((bmaior+bmenor)*h)/2
            console.log('escolhido opção 7');
            break;
        case '8': //volume e uma esfera - (4 * Math.PI * Math.pow(r, 3))/3
            console.log('escolhido opção 8');
            break;
        default:
            console.log('Erro: Digite um valor de 1 a 8')
    }
    
}

module.exports = {
    escolherFuncao
}