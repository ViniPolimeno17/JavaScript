var prompt = require('prompt-sync')();

let  senha =  Number(prompt("Olá, digite sua senha: "))
const senhacerta = 1234;


while (senha !== senhacerta) {
    
    senha = Number(prompt("Olá, digite sua senha: "))
}