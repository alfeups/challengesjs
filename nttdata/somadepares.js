let x = parseInt(gets());
let soma = 0;

    while(x!== 0) {
      if(x % 2 !== 0) {
        x += 1;
      }
       let soma = 0;
       for (let i = 0; i < 5; i++) {
         soma += x; 
         x += 2;
       }
    print(soma);
    x = parseInt(gets());
}
