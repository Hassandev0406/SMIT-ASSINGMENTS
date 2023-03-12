// 1- What will be the result for these expressions?
// 5 > 4
let num = 5 > 4;  //  Make a variable and store this value in it
console.log(num);

// "apple" > "pineapple"
let fruit = "apple" > "pineapple"; //  Make a variable and store this value in it
console.log(fruit);

// "2" > "12"
let num1 = "2" > "12";  //  Make a variable and store this value in it
console.log(num1);

// undefined == null
let equal = undefined == null; //  Make a variable and store this value in it
console.log(equal);

// undefined === null
let compare = undefined === null; //  Make a variable and store this value in it
console.log(compare);

// null == "\n0\n"
let comparing = null == "\n0\n";  //  Make a variable and store this value in it
console.log(comparing);

// null === +"\n0\n"
let comparing1 = null === "\n0\n";  //  Make a variable and store this value in it
console.log(comparing1);



// 2-What are the final values of all variables a, b, c and d after the code below?
//  let a = 1, b = 1;
//  let c = ++a; // ?
//  let d = b++; // ?
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a, b, c, d);


//  3-What are the values of a and x after the code below?
// let y = 2;
// let x = 1 + (a *= 2);
let y = 2;
let x = 1 + (y *= 2);
console.log(x);

// 4-Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

let first = Number(prompt("First number?"));
let Second = Number(prompt("Second number?"));
alert(`The sum of First number and Second number is"${first + Second}"`);

// 5- Rewrite this if using the conditional operator '?':
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let q = Number(prompt("Enter the first number"));
let w = Number(prompt("Enter the second number"));
let result;
if (q + w < 4) {
    result = "Below 4"
}
else {
    result = "Over 4"
}
//  Now rewrite this

let e = Number(prompt("Enter the first number"));
let r = Number(prompt("Enter the second number"));
let answer = (e + r < 4) ? 'Below 4' : 'Over';
alert(answer);

// 6- Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let login = prompt('Please enter your login:');
let message = (login == 'Employee')
    ? 'Hello'
    : (login == 'Director')
        ? 'Greetings'
        : (login == '')
            ? 'No login'
            : '';
alert(message);

// 7-What is the code below going to output?

// alert( null || 2 || undefined );

alert(null || 2 || undefined);



// 8-What will the code below output?

// alert( alert(1) || 2 || alert(3) );


alert( alert(1) || 2 || alert(3) );