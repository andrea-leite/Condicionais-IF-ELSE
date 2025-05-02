function determinarMaiorMenorDeQuatro(a:number, b:number, c:number, d:number) {
    let maior = a;
    let menor = a;
  
    if (b > maior) {
      maior = b;
    }
    if (b < menor) {
      menor = b;
    }  
    if (c > maior) {
      maior = c;
    }
    if (c < menor) {
      menor = c;
    }  
    if (d > maior) {
      maior = d;
    }
    if (d < menor) {
      menor = d;
    }
  
    return [maior, menor];
  }
  
  const resultado1 = determinarMaiorMenorDeQuatro(1, 2, 3, 4);
  console.log(`Maior: ${resultado1[0]}, Menor: ${resultado1[1]}`); 
  
  const resultado2 = determinarMaiorMenorDeQuatro(10, 15, 5, 8);
  console.log(`Maior: ${resultado2[0]}, Menor: ${resultado2[1]}`);
  
  const resultado3 = determinarMaiorMenorDeQuatro(-1, 0, -10, 20);
  console.log(`Maior: ${resultado3[0]}, Menor: ${resultado3[1]}`);
  
  const resultado4 = determinarMaiorMenorDeQuatro(7, 7, 7, 7);
  console.log(`Maior: ${resultado4[0]}, Menor: ${resultado4[1]}`);
  
  const resultado5 = determinarMaiorMenorDeQuatro(100, 25, 50, 75);
  console.log(`Maior: ${resultado5[0]}, Menor: ${resultado5[1]}`);
  