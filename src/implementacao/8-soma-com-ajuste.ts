function somaComAjuste(x:number, y:number): number {
    let z:number;
    z = x + y;

    if(z > 20){
        return (z + 8);
    }else {
        return (z - 5); 
    }    
}
console.log(somaComAjuste(15,10));
console.log(somaComAjuste(12,7));
