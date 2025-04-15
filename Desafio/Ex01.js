// Crie um sistema que permita cadastrar nomes. Antes de adicionar,
// verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
// não estiver, adicione o usuário.

var prompt = require(`prompt-sync`)();



let Lista = ["ana","bia", "Joao"]
let Nomes = prompt("Digite seu nome: ").toLowerCase();

if (Lista.includes(Nomes)) {
    console.log("Nome ja cadastrado");
} else {
    Lista.push(Nomes);
    console.log("Nome adicionado ao sistema.");
    
}