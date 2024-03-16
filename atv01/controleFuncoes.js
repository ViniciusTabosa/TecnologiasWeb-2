var funcao = require('./libCalculadora')

function escolherFuncao(n){
    switch (n){
        case '1':
            
            break;
        case '2':
            console.log('escolhido opção 2');
            break;
        case '3':
            console.log('escolhido opção 3');
            break;
        case '4':
            console.log('escolhido opção 4');
            break;
        case '5':
            console.log('escolhido opção 4');
            break;
        case '6':
            console.log('escolhido opção 4');
            break;
        case '7':
            console.log('escolhido opção 4');
            break;
        case '8':
            console.log('escolhido opção 4');
            break;
        default:
            console.log('Erro: Digite um valor de 1 a 8')
    }
    
}

module.exports = {
    escolherFuncao
}