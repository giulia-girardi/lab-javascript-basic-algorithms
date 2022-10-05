console.log(`I'm ready!`)
// Iteration 1: Names and Input

const hacker1 = "Giulia";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Eric";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


// Iteration 3: Loops
//3.1
const fullName = (hacker1).toUpperCase();
let newName = "";
for (let index = 0; index <= fullName.length - 1; index += 1) {
    newName += fullName[index] + " ";
}
console.log(newName)

//3.2
let reverseName = "";
for (let index = hacker2.length - 1; index >= 0; index -= 1) {
    reverseName += hacker2[index];
}
console.log(reverseName)

//3.3 
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}