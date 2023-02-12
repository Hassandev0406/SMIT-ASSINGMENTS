// 1st Declare two variables: admin and name. Assign the value "Umair Azmat" to name. Copy the value from name to admin. Show the value of admin using alert (must output Name).

// simple we make two variables
let name="Hassan Raza";
// now i am give name value to admin variable
admin=name;
// now alert it
alert(admin);

                                        //    2nd Problem

// 2nd Create a variable with the name of our planet. How would you name such a variable?

// simple we will create a variable named planet
let planet= "Earth";
// now console it
console.log(planet);


                                        // 3rd Problem

 // Create a variable to store the name of a current visitor to a website. How would you name that variable?

 let visitor= "Hassan";
 console.log(visitor);


                                        //    4Th Problem
 // Create a string variable called favDrink and assign a value to it.    
 
//  first we learn how to check any word datatype
// for example
let Hassan="student";
console.log(typeof Hassan);
// after console the result is string because we enter a alphabatic type in variable
// now solve the problem 
let favDrink="coca cola";
console.log(favDrink);
// we can also write in this way
let favdrink;
favdrink="coca cola";
console.log(favdrink);


                                            // 5th Problem
// Create a number variable called favNum and assign a value to it

let favnumber=07;
console.log(favnumber)

                                            //   6th Problem
 // Create a function block called myFavs that console logs your answers, don't forget to invoke the myFavs function.                                           
// create a fnction and give it values

function myFavs() {
console.log("My favourite food is Fish");
console.log("my favourite movie is Hera Pheri");
console.log("My favourite hobby is coding");
} 

myFavs();


                                            //  7th Problem
// Create an object called person, with name set to Umair and age set to 20.

let person ={
name:"Hassan",
age:20,
Hobby:"Coding"
}
// if we console variable name like person it will console all values but if we do 
// console.log(person{"age"})  it will only console the age value

console.log(person);
// now only console 1 value
console.log(person["age"])



                                            // 8th Problem
 // write a JS program, define two variables and sum those two variable and save result in third variable and print in console?

 let num1 =20;
 let num2=40;
 let num3=num1+num2;
//  now console num3 to see the result
console.log(num3);


                                            //  9th Problem
 // write a JS program, that can divide two numbers and show the result in console? console.log("result of firstProgram", a);

 let div1=60;
 let div2=30;
 console.log(div1/div2);


                                            //  10th Problem
// write a JS program, that can add two number, divide result by 5 and show in console?console.log("result of firstProgram", a);


let add1=40;
let add2=60;
let add3=add1+add2;
console.log(add3/5);


                                        //    11th problem
 // write a JS program, that can convert temp from F into C and show into console, using C = (F − 32) * 5/9. use if F = 50, what will be the value of C? console.log("Divide two number", a);



 let f=50;
 let ans=f-32;
 let c=ans*5/9;
 console.log(c)


                                        // 12th Problem
// Write a JavaScript program to find the sum of two numbers obtained from prompt and display the result using alert.


let num = Number(prompt("Enter your first number"));
let num4 = Number(prompt("Enter your second number for sum "));
let sum = num+num4;
alert(`The sum of ${num} and ${num4} is ${sum} `);

                                        //  13th problem
// Write a JavaScript program to find the difference of two numbers obtained from prompt and display the result using console.log.

let diff = Number(prompt("Enter your first number"));
let diff1 = Number(prompt("Enter your second number for difference "));
let diff3 = diff-diff1;
alert(`The difference of ${diff} and ${diff1} is ${diff3} `);

                                            // 14th problem
//  Write a JavaScript program to find the product of two numbers obtained from prompt and display the result using alert.

let pro = Number(prompt("Enter your first number "));
let pro1 = Number(prompt("Enter your second number for product "));
let pro2 = pro*pro1;
alert(`The product of ${pro} and ${pro1} is ${pro2} `);

                                            //  15th Problem
//Write a JavaScript program to find the quotient of two numbers obtained from prompt and display the result using console.log.

let quo = Number(prompt("Enter your first number "));
let quo1 = Number(prompt("Enter your second number for quotient "));
let quo2 = quo/quo1;
alert(`The Quotient of ${quo} and ${quo1} is ${quo2} `);


                                                //   16th problem
// Write a JavaScript program to find the remainder of two numbers obtained from prompt using the modulus operator and display the result using alert.




let rem = Number(prompt("Enter your first number "));
let rem1 = Number(prompt("Enter your second number for Remainder "));
let rem2 = rem%rem1;
alert(`The remainder of ${rem} and ${rem1} is ${rem2} `);