function ordenarDescendente(numeroPrimeiro: number, numeroSegundo: number, numeroTerceiro: number): string {
    let primeiro: number;
    let segundo: number;
    let terceiro: number;
  
    if (numeroPrimeiro >= numeroSegundo && numeroPrimeiro >= numeroTerceiro) {
      primeiro = numeroPrimeiro;
      if (numeroSegundo >= numeroTerceiro) {
        segundo = numeroSegundo;
        terceiro = numeroTerceiro        ;
      } else {
        segundo = numeroTerceiro;
        terceiro = numeroSegundo;
      }
    } else if (numeroSegundo >= numeroPrimeiro && numeroSegundo >= numeroTerceiro) {
      primeiro = numeroSegundo;
      if (numeroPrimeiro >= numeroTerceiro) {
        segundo = numeroPrimeiro;
        terceiro = numeroTerceiro;
      } else {
        segundo = numeroTerceiro;
        terceiro = numeroPrimeiro        ;
      }
    } else {
      primeiro = numeroTerceiro;
      if (numeroPrimeiro >= numeroSegundo) {
        segundo = numeroPrimeiro;
        terceiro = numeroSegundo;
      } else {
        segundo = numeroSegundo;
        terceiro = numeroPrimeiro;
      }
    }
  
    return `${primeiro}, ${segundo}, ${terceiro}`;
  }
  
  console.log(ordenarDescendente(3, 1, 2));   
  console.log(ordenarDescendente(5, 8, 2)); 
  console.log(ordenarDescendente(-1, 0, -5)); 
  console.log(ordenarDescendente(7, 7, 7));
  console.log(ordenarDescendente(50, 25, 75));