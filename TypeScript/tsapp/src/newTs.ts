var j: any;
var n: any = "a b c";

for (j in n) {
  console.log(n[j]);
}

//////////////////////////////

var i: number = 1;
while (i <= 5) {
  if ((i % 2) / 2 == 0) {
    console.log(i);
  }
  i++;
}

//////////////////////////////////

var i = 1;

while (i <= 10) {
  console.log("*");
  i++;
}

//////////////////////////////

var myFunc = new Function("a", "b", "return a * b");
var x = myFunc(4, 3);
console.log(x);

/////////////////////////Factorial/////////////////
var i: number,
  num: number = 5,
  fact: number = 1;

for (i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log("Factorial of " + num + " is " + fact);

////////////////////////////////////////////////

var l = [1, 2, 3, 4, 5, 6];

for (var k = 0; j < l.length; k++) {
  console.log(l[k]);
  break;
}
