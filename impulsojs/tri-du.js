var s = gets().split(" ");
let A = parseInt(s[0]);
let B = parseInt(s[1]);

switch(true) {
case A > B:
  print(A);
  break;
case B > A:
  print(B);
  break;
case A == B:
  print(A);
  break;
}