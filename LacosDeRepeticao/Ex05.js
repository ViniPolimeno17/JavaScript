let prompt = require('prompt-sync')();
let num = 0;

do {

console.log("$_________________$");
console.log("|                 |");
console.log("|    1- Jogar     |");
console.log("|    2- Config    |");
console.log("|    0- Sair      |");
console.log("|                 |");
console.log("|_________________|");

num = Number(prompt("Digite um numero :"))

    
} while (num !== 0);
