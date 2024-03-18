var funcao = require('./libCalculadora')
var input = require('readline-sync');

function escolherFuncao(resposta){
    let n1, n2
    switch (resposta){
        case '1': //soma
            console.log('\nSOMA')
            n1 = Number.parseFloat(input.question('Digite um numero: '))
            n2 = Number.parseFloat(input.question('Digite outro numero: '))
            return (`Resultado = ${funcao.soma(n1, n2)}`)

        case '2': //subtração
            console.log('\nSUBTRACAO')
            n1 = Number.parseFloat(input.question('Digite um numero: '))
            n2 = Number.parseFloat(input.question('Digite outro numero: '))
            return (`Resultado = ${funcao.sub(n1, n2)}`)

        case '3': //multiplicação
            console.log('\nMULTIPICLACAO')
            n1 = Number.parseFloat(input.question('Digite um numero: '))
            n2 = Number.parseFloat(input.question('Digite outro numero: '))
            return (`Resultado = ${funcao.multi(n1, n2)}`)

        case '4': //divisão
            console.log('\nDIVISAO')
            n1 = Number.parseFloat(input.question('Digite um numero: '))
            n2 = Number.parseFloat(input.question('Digite outro numero: '))
            return (`Resultado = ${funcao.div(n1, n2)}`)

        case '5': //potência
            console.log('\nPOTENCIACAO')
            n1 = Number.parseFloat(input.question('Digite o numero base: '))
            n2 = Number.parseFloat(input.question('Digite o expoente: '))
            return (`Resultado = ${funcao.potencia(n1, n2)}`)

        case '6': //hipotenusa
            console.log('\nTEOREMA DE PITAGORAS')
            n1 = Number.parseFloat(input.question('Digite o cateto oposto: '))
            n2 = Number.parseFloat(input.question('Digite o cateto adjacente: '))
            return (`Hipotenusa = ${funcao.hipotenusa(n1, n2)}`)

        case '7': //área do trapézio
            console.log('\nAREA DO TRAPEZIO')
            n1 = Number.parseFloat(input.question('Digite a base maior: '))
            n2 = Number.parseFloat(input.question('Digite a base menor: '))
            let n3 = Number.parseFloat(input.question('Digite a altura: '))
            return (`Area do trapezio = ${funcao.areaTrapezio(n1, n2, n3)}`)

        case '8': //volume e uma esfera
            console.log('\nVOLUME DA ESFERA')
            n1 = Number.parseFloat(input.question('Digite o tamanho do raio: '))
            return (`Volume = ${funcao.volumeEsfera(n1)}`)

        default:
            return ('Erro: Escolha a operacao digitando um numero de 1 a 8')
    }
    
}

module.exports = {
    escolherFuncao
}