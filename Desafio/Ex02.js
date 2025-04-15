//Um sistema de controle de presença precisa listar os alunos que compareceram à aula.(usando ForEach)

let objetos = [
    {produto: "panela de pressao", preço: "8,00"},
    {produto: "colher", preço: "10,00"},
    {produto: "mesa", preço: "9,00"}
  ]
  
  let objetoProduto = objetos.map(objeto => objeto.produto);
  let objetoPreço = objetos.map(objeto => objeto.preço);
  
  objetos.map(objetos => {
    console.log(`${objetos.produto} - R$ ${objetos.preço}`);
  });

// ["Caneta - R$ 2.50", "Caderno - R$ 15.00"]