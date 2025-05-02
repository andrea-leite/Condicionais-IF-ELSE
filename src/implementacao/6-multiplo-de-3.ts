function verificarMultiploDe3() {
    const readlineSync = require('readline-sync');
    
    const numero = readlineSync.question('Digite um número: ');
    const n = parseInt(numero);
    if (numero % 3 === 0) {
        return `O número ${numero} é multiplo de 3`;
    }else {
        return `O número ${numero} não é multiplo de 3`; 
    }
}

console.log(verificarMultiploDe3());

