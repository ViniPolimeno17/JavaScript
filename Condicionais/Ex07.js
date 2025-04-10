var prompt = require('prompt-sync')();

let numberMes = Number(prompt("Digite o número do mês desejado: "));

switch(numberMes){
    case 1:
        console.log("O mês é Janeiro")
        break;
    case 2:
        console.log("O mês é Fevereiro")
        break;
    case 3:
        console.log("O mês é Março")
        break;
    case 4:
        console.log("O mês é Abril")
        break;
    case 5:
        console.log("O mês é Maio")
        break;
    case 6:
        console.log("O mês é Junho")
        break;
    case 7:
        console.log("O mês é Julho")
        break;
    case 8:
        console.log("O mês é Agosto")
        break;
    case 9:
        console.log("O mês é Setembro")
        break;
    case 10:
        console.log("O mês é Outubro")
        break;
    case 11:
        console.log("O mês é Novembro")
        break;
    case 12:
        console.log("O mês é Dezembro")
        break;
    
    default:
        console.log("Mês inválido")
    }