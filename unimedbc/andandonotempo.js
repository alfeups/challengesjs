const line = gets().split("")
const a = line[0];
let b = line[1];
const c = line[2];


if (a + b == c || a + c == b || c + b == a  || a == b  || c == a ||  b == c) {
    print('S');
} else {
    print('N');
}