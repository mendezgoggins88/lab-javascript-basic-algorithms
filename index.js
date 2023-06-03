// Iteration 1  : Names and Input
const hacker1 = "Jonh";
console.log(`The driver´s name is ${hacker1}`);
const hacker2 = "Navigator";
console.log(`The navigator´s name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    } else {
    console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`)
    }
// Iteration 3: Loops
// 3.1
let nombreEnMayusculas = ""
for (let i = 0; i < hacker1.length; i++) {
    nombreEnMayusculas = nombreEnMayusculas + hacker1[i].toUpperCase() + " "
}
console.log(nombreEnMayusculas)
// 3.2
let nombreInvertido = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    nombreInvertido = nombreInvertido + hacker1[i]
}
console.log(nombreInvertido)
// 3.3
const names = [hacker1, hacker2]
for (i=0; i < names.length; i++) {
    if (names[0].length > names[1].length) {
        console.log("The driver's name goest first.");
    } else if (names[0].length < names[1].length) {
        console.log("Yo, the navigator goes first, definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }
}