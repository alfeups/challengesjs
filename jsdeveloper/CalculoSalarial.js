function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }
    if(salario >1100 && salario <= 2500){
        aliquota = 0.1;
    }
    if(salario > 2500){
        aliquota =  0.15;
    }
    return aliquota * salario;
}

const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

const valorImposto = calcularImposto(valorSalario);
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));