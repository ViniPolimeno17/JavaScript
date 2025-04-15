//.Length() => tamanho

// let frutas = ["Maça", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa", "Abacate", "Jabuticaba", "Romã", "Seriguela", "Embu", "Caqui", "Uva roxa"];

// console.log(frutas.length);

//-------------------------------------------------------------------------------------------------------

//.reverse() -> reverte o nosso array
// let numeros = [70, 100, 120, 1000];

// numeros.reverse();

// console.log(numeros);

//--------------------------------------------------------------------------------------------------------

// let nomes = ["Clovis", "Valdemir", "Douglas"];

// //.push() => Adiciona no final
// nomes.push("Gilmar");

// //.unshift() => Adiciona no inicio
// nomes.unshift("Mario");

// //.shift => Remove no inicio
// nomes.shift();

// //.pop() => Remover o final
// console.log(nomes.pop());

// console.log(nomes.splice(2,1))


// console.log(nomes)

//------------------------------------------------------------------------------------------------------------

// let nomesAnimais = ["Julie", "Meg", "Bob", "Thor"];

// //.includes => Se existe no Array, se existir ele retornara true
// console.log(nomesAnimais.includes("Meg"));

//------------------------------------------------------------------------------------------------------------

// let valores = [30, 55, 77, 66];

// //Quero os valores maiores de 50
// let maiores = valores.filter(num => num > 50);

// console.log(maiores)

//------------------------------------------------------------------------------------------------------------

//.map() => Definição: Método usado em array que permite transmformar os elementos do array original em novos valores, criando um novo array, sem modificar o original.
 
//1. lista de nomes de alunos e notas
// let alunos = [
//     {nome: "Marlene", nota: 8},
//     {nome: "Clotilde", nota: 10},
//     {nome: "Flora", nota: 9},
//     {nome: "Rosa", nota: 7},
//     {nome: "Vanusa", nota: 10}
// ];
// // Lista de nomes
// let alunoNomes = alunos.map(aluno => aluno.nome);
// let alunoNotas = alunos.map(aluno => aluno.nota);

// console.log(alunoNomes);
// console.log(alunoNotas);

// 2. Criar um array com mensagens personalizadas
// let nomes = ["Caio", "Dani", "Ryan", "Vinicius"];

// //Olá Caio

// let mensagem = nomes.map(itemDoArrayNomes => `Olá, ${itemDoArrayNomes}`);
// // let mensagem2 = nomes.map(itemDoArrayNomes => "Olá," + itemDoArrayNomes);

// console.log(mensagem)

// 3. Pegar apenas os primeiros caracteres de nomes

// let nomes = ["Isabelly", "Emilly", "Machado", "Guilherme"];

// let inicialNomes = nomes.map(element => element[0]);

// console.log(inicialNomes);

// 4. kaue@gmail.com

let emails = [
    "kaue@gmail.com", "ferzinha@hotmail.com", "emeeme@outlook.com"
]
let dominios = emails.map(element => element.split("@")[1])

console.log(dominios);
