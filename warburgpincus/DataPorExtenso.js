const meses = {
    "1": "Janeiro",
    "2": "Feveiro",
    "3": "Março",
    "4": "Abril",
    "5": "Maio",
    "6": "Junho",
    "7": "Julho",
    "8": "Agosto",
    "9": "Setembro",
    "10": "Outubro",
    "11": "Novembro",
    "12": "Dezembro"

}

let data = gets();
let [dia, mes ,ano] = data.split('/');


console.log(`${dia} de ${meses[parseInt(mes)]} de ${ano}`);

console.log(getDate(strSplit));
