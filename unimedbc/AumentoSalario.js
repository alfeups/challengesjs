
const lines = gets();
const salary = Number(lines);
let percent;

if (salary >= 0 && salary <= 400.00) {
  percent = 15;
} else if (salary >= 400.01 && salary <=  800.00) {
  percent = 12;
} else if (salary >= 800.01 && salary <=  1200.00) {
  percent = 10;
} else if (salary >= 1200.01 && salary <= 2000.00) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = salary * (percent / 100);
const newSalary = salary + reajust;

print("Novo salario: " + newSalary.toFixed(2));
print("Reajuste ganho: " + reajust.toFixed(2));
print("Em percentual: " + percent + " %");