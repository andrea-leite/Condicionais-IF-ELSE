const readlineSync = require('readline-sync');

const numeroRecebido = readlineSync.question('Digite um número: ');
const numeroDivisor = readlineSync.question('Digite mais um número: ');

const numeroConvertido1 = parseInt(numeroRecebido);
const numeroConvertido2 = parseInt(numeroDivisor);

function verificarDivisivel(a: number, b: number): string {
    if (a % b == 0) {
        return "A é divisivel por B";
    } else {
        return "A não é dividivel por B";
    }
}

console.log(verificarDivisivel(numeroConvertido1, numeroConvertido2));
