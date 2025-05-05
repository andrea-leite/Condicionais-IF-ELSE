function determinarMaiorMenorDeQuatro(
  numeroPrimeiro: number,
  numeroSegundo: number,
  numeroTerceiro: number,
  numeroQuarto: number
) {
  let maior = numeroPrimeiro;
  let menor = numeroPrimeiro;

  maior = numeroSegundo > maior ? numeroSegundo : maior;
  menor = numeroSegundo < menor ? numeroSegundo : menor;
  maior = numeroTerceiro > maior ? numeroTerceiro : maior;
  menor = numeroTerceiro < menor ? numeroTerceiro : menor;
  maior = numeroQuarto > maior ? numeroQuarto : maior;
  menor = numeroQuarto < menor ? numeroQuarto : menor;

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
