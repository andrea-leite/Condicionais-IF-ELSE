function somaComAjuste(primeiroNumero:number, segundoNumero:number): number {
    let resultado:number;
    resultado = primeiroNumero + segundoNumero;

    if(resultado > 20){
        return (resultado + 8);
    }else {
        return (resultado - 5); 
    }    
}
console.log(somaComAjuste(15,10));
console.log(somaComAjuste(12,7));
