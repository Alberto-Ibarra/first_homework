//Section 1

//1.
// DRY - Don't repeat yourself
// we should'nt write DRY code because the goal is to reduce the repetition of patterns and duplicating code. We also, want to develop reusable code for easier use.


//2. 
// const is a unchangeable declaration. 
// let declares a variable. unlike const, let is alterable. let avaliable inside the code block where they're defined.
// var is the same as let except var is a function scope and can be used within an entire function
// let is the preferable declaration used amongest let and var

// ---------------------------------------------------------------------

//Setion 2

const a = 4
const b = 53
const c = 57
const d = 16
const e = 'Kelvin'
const f = false

console.log(a != b);
console.log(c != d);
console.log(e === e);
console.log(a != b || c);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f != e);

let g = 0;
console.log(g);
g = b + c;
console.log(g);

//Answer
//I used the let declaration beause the variable was going to be altered by adding b + c. const would log an error.
// i predicted an error but the outcome still worked as if it was declared as let.
//an error will occur stating SyntaxError: Invalid left-hand side in assignment


// ---------------------------------------------------------------------

//Section 3

//1.
//Yes, the code will run infinite because the condition will always remain true. loop will not stop.

//2.
//No, the loop will not run infinite. variable above is declared a const and once while loop is ran runProgram will become error the loop due to it trying to change to false. if runProgram was set as let or var then yes loop would end.


//3.
let letters = 'A'
let i = 0
//while loop will start at 0 and stop once it hits over 20.
while (i < 20) {
    //every iteration of loop add 'A' to letters variable.
    letters += 'A'
    //this will increment i by 1 every loop
    i++
}
//this will log updated letters variable while will be 21 As
console.log(letters)

// ---------------------------------------------------------------------


//Section 4

//The first part of the control panel is: variable declaration
//The second part of the control panel is: conditional
//The third part of the control panel is: iterator

// //loop from 0 to 999
for(let i = 0; i < 1000; i++){
    console.log(i);
}

// //loop decreases from 999 to 0
for(let i = 999; i >0; i--){
    console.log(i);
}

for(let i = 0; i < 11; i++){
    console.log("The value of i is: " + i + " of 10");
}


