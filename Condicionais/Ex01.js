var prompt = require('prompt-sync')();

let numero =  Number(prompt("Olá, digite seu número: "))

if (numero > 0 ) {
    console.log("Seu numero e positivo")
}else if(numero < 0){
    console.log("seu número e negativo")
}else{
    console.log("seu número é zero")
}