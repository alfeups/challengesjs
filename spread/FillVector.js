let a = parseInt(gets());
let arr = [];

for (let i = 0; i < 10; i++) {
    arr = [...arr, a]
    console.log(`N[${i}] = ${arr[i]}`);
    a *= 2;
}