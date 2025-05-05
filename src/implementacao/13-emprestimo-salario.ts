function verificarEmprestimo(salarioBruto: number, valorPrestacao: number): string {
  const limitePrestacao: number = salarioBruto * 0.3;
  return valorPrestacao <= limitePrestacao ? "Empréstimo aprovado!" : "Empréstimo não aprovado.";
}

console.log(verificarEmprestimo(3000, 900));
console.log(verificarEmprestimo(4000, 1500));
console.log(verificarEmprestimo(5000, 1200));