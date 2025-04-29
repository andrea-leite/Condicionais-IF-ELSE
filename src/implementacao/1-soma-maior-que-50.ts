function somaMaiorQueCinquenta(number1:number, number2:number) {
    let soma = number1 + number2;
    if (soma > 50){
        return soma;
    } else {
        return null
    }
    
}
console.log(somaMaiorQueCinquenta(25, 30));
console.log(somaMaiorQueCinquenta(20, 25));