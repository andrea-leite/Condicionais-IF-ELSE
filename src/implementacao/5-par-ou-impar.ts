function verificarParOuImpar() : string {
    const readlineSync = require('readline-sync');
    
    const numero = readlineSync.question('Digite um número: ');
    const n = Number.parseInt(numero);

    if (n % 2 === 0) {
        return `${n} é Par`;
    }else {
        return `${n} é Ímpar`;        
    }
}
console.log(verificarParOuImpar());


