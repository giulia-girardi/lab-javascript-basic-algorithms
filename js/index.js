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

// Bonus 1
const threeParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie hendrerit lectus, semper pharetra ligula sodales vitae. Cras ante dui, lobortis vel lorem eget, posuere mollis lacus. Mauris ut urna risus. Curabitur facilisis lorem ante, a euismod lectus consequat ut. Ut commodo, justo molestie condimentum sagittis, neque justo mollis dui, et rhoncus justo odio eget nisi. Donec congue, est et dapibus ornare, nulla est fringilla ex, non tristique tortor augue eu nibh. Etiam iaculis metus at felis sodales, nec vehicula sapien facilisis. Donec ut bibendum sem, vel pharetra neque. Vivamus rutrum libero augue, sed feugiat diam egestas et. Donec faucibus laoreet sodales. Aliquam pretium eros vitae nunc pellentesque pharetra. Suspendisse tincidunt odio et nisi suscipit maximus. Donec hendrerit leo nec condimentum porttitor. Curabitur at ligula commodo, vestibulum metus quis, finibus nisl. Cras ac dictum justo, sit amet posuere tortor. Suspendisse finibus venenatis erat, sit amet ultrices nisl sodales ac. Proin venenatis turpis at posuere rutrum. Donec vel blandit tortor. Aenean non sem molestie, tempus elit id, vulputate dolor. Maecenas nisl enim, laoreet quis nibh et, rhoncus laoreet eros. Nulla eget fringilla dui, eget auctor erat. Pellentesque condimentum erat ut sem interdum, eget malesuada ipsum tincidunt. Suspendisse condimentum libero lacus, ac scelerisque nisi efficitur sed. Nam sollicitudin interdum sapien sit amet pharetra. Vestibulum sed augue porttitor, ultrices lacus in, semper odio. Proin lorem dui, lacinia nec pretium vel, semper sit amet lorem. Pellentesque suscipit facilisis nunc, non condimentum turpis sollicitudin sed. Morbi ultricies lacinia mi, consectetur tempor risus sodales non. Aliquam sodales vel nibh euismod auctor. Nunc velit ex, blandit vel auctor a, ultrices commodo magna. Fusce massa purus, aliquet vel risus fermentum, suscipit lobortis augue. Donec maximus lectus in lacus vestibulum, sit amet lobortis tellus ultrices. Duis eu tellus tortor. Sed maximus in justo sed aliquam.";
let numWords = 0;
for (let index = 0; index <= threeParagraphs.length -1; index += 1) {
    if (threeParagraphs[index] === " ") {
        numWords += 1;
    }
}
console.log(numWords);

let numEt = 0;
for (let i = 0; i <= threeParagraphs.length; i += 1) {
        if ((threeParagraphs[i] === " ") && (threeParagraphs[i + 1] === "e") && (threeParagraphs[i + 2] === "t") && (threeParagraphs[i + 3] === " ")) {
            numEt += 1;
        }
    }
console.log(numEt);

// Bonus 2 
const phraseToCheck = "anna";

const phraseToCheckWithoutSpecial = phraseToCheck.replace(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g," ").toLocaleLowerCase();

let phraseToCheckCleaned= "";
for (let index = 0; index <= phraseToCheckWithoutSpecial.length - 1; index += 1) {
    if (phraseToCheckWithoutSpecial[index] === " ") {
        continue
    } else {
        phraseToCheckCleaned += phraseToCheckWithoutSpecial[index];
    }
}
console.log(phraseToCheckCleaned);

let reversePhrase = "";
for (let index = phraseToCheckCleaned.length - 1; index >= 0; index -= 1) {
    reversePhrase += phraseToCheckCleaned[index];
}
console.log(reversePhrase)

let result;
for (let index = 0; index <= phraseToCheckCleaned.length -1; index += 1) {
    if (phraseToCheckCleaned[index] === reversePhrase[index]) {
        result = true;
    } else {
        result = false;
        break;
    }
}
console.log(result);
if (result === true) {
    console.log("It'a palindrome");
} else {
    console.log("It's NOT a palindrome");
}
    






