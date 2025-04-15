var prompt = require('prompt-sync')();
let Nome = prompt("Qual seu Nome: ");
const Cadastrado = ["Ana", "Carlos","Bianca"];

        do {
            
            console.log("Repita o seu Nome: ")

        } while (Nome == Cadastrado);

console.log("Passe liberado com sucesso ;)");
