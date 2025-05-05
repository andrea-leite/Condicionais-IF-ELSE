function calcularRaizOuQuadrado(numero: number): string {
    if (numero >= 0) {
        if (numero === 0) return "A raiz quadrada de 0 é 0."; // Caso especial para 0

        let raiz = 1;
        
        while ((raiz + 1) * (raiz + 1) <= numero) {
            raiz++;
        }

        if (raiz * raiz === numero) {
            return `A raiz quadrada de ${numero} é ${raiz}.`;
        } else {
            return `A raiz quadrada aproximada de ${numero} é ${raiz} (não é uma raiz perfeita).`;
        }
    } else {
        return `O quadrado de ${numero} é ${numero * numero}.`;
    }
}

console.log(calcularRaizOuQuadrado(16));  
console.log(calcularRaizOuQuadrado(-3));  
console.log(calcularRaizOuQuadrado(0));   
