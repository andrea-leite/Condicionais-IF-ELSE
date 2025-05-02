function ordenarDescendente(a: number, b: number, c: number): string {
    let primeiro: number;
    let segundo: number;
    let terceiro: number;
  
    if (a >= b && a >= c) {
      primeiro = a;
      if (b >= c) {
        segundo = b;
        terceiro = c;
      } else {
        segundo = c;
        terceiro = b;
      }
    } else if (b >= a && b >= c) {
      primeiro = b;
      if (a >= c) {
        segundo = a;
        terceiro = c;
      } else {
        segundo = c;
        terceiro = a;
      }
    } else {
      primeiro = c;
      if (a >= b) {
        segundo = a;
        terceiro = b;
      } else {
        segundo = b;
        terceiro = a;
      }
    }
  
    return `${primeiro}, ${segundo}, ${terceiro}`;
  }
  
  console.log(ordenarDescendente(3, 1, 2));   
  console.log(ordenarDescendente(5, 8, 2)); 
  console.log(ordenarDescendente(-1, 0, -5)); 
  console.log(ordenarDescendente(7, 7, 7));
  console.log(ordenarDescendente(50, 25, 75));