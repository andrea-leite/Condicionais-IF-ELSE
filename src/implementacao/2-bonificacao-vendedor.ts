function calcularBonificacao(valorUnitario: number, quantidade: number) {
    let valorVenda: number = valorUnitario * quantidade;
      
    let bonificacao: number = 0;
    if(valorVenda > 100) {
        bonificacao = valorVenda * 0.10;
        return `Valor total: R$${valorVenda}. Bonificação de 10% para o vendedor!`;
    } else {
        return "Valor total: R$60,00."
    }
}
 console.log(calcularBonificacao(20, 6));
 console.log(calcularBonificacao(15, 4));
