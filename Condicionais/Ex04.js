var prompt = require('prompt-sync')();

let  senha =  String(prompt("Olá, digite sua senha: "))
let senhacerta = 1234;

if (senha == senhacerta) {
    console.log("Congratulations!!")
}else{
    console.log("❌❌❌")
}