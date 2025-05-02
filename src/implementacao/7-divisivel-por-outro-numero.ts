function verificarDivisivel(a: number, b:number) : string{
    
    if (a % b == 0) {
        return "A é divisivel por B";
    }else {
        return "A não é dividivel por B";
    }
}    
const readlineSync = require('readline-sync');

const numero = readlineSync.question('Digite um número: ');
const outroNumero = readlineSync.question('Digite mais um número: ');

const num1 = parseInt(numero);
const num2 = parseInt(outroNumero);


console.log(verificarDivisivel(num1, num2));