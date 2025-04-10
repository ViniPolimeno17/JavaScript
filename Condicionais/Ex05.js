var prompt = require('prompt-sync')();

let  Aluno =  String(prompt("Olá, digite a nota do aluno: "))

let nota = 5;

if (Aluno >= nota) {
    console.log("Aluno aprovado✅")
}else{
    console.log("Aluno reprovado❌")
}