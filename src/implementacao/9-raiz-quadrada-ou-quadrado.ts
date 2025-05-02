function calcularRaizOuQuadrado(n: number): string {
    if (n >= 0) {
        if (n === 0) return "A raiz quadrada de 0 é 0."; // Caso especial para 0

        let raiz = 1;
        
        while ((raiz + 1) * (raiz + 1) <= n) {
            raiz++;
        }

        if (raiz * raiz === n) {
            return `A raiz quadrada de ${n} é ${raiz}.`;
        } else {
            return `A raiz quadrada aproximada de ${n} é ${raiz} (não é uma raiz perfeita).`;
        }
    } else {
        return `O quadrado de ${n} é ${n * n}.`;
    }
}

console.log(calcularRaizOuQuadrado(16));  
console.log(calcularRaizOuQuadrado(-3));  
console.log(calcularRaizOuQuadrado(0));   
