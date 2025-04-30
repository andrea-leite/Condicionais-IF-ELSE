function determinarMenorMaior(a: number, b: number): [number, number] {
    let maior: number;
    let menor: number;

    if (a > b) {
        maior = a;
        menor = b;
    } else if (b > a) {
        maior = b;
        menor = a;
    } else {
        maior = a;
        menor = b;
    }
        return [maior, menor];
    }
    console.log(determinarMenorMaior(5, 10));   // Saída: [10, 5]
    console.log(determinarMenorMaior(-3, 2));   // Saída: [2, -3]
    console.log(determinarMenorMaior(7, 7));    // Saída: [7, 7]
    console.log(determinarMenorMaior(0, 100));  // Saída: [100, 0]
    console.log(determinarMenorMaior(-5, -10)); // Saída: [-5, -10