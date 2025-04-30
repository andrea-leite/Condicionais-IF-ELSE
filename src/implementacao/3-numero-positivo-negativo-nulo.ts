function verificarNumero(numero: number): string {
    let resultado: string;

    if (numero > 0){
        resultado = "POSITIVO";
    } else if (numero < 0) {
        resultado = "NEGATIVO";
    } else {
        resultado = "NULO";
    }
    return resultado;
}

console.log(verificarNumero(5));
console.log(verificarNumero(-3));
console.log(verificarNumero(0));

