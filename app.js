function parOuImpar() {
    const numberQuestion0 = Number(document.getElementById("number-question-0").value);
    const resultQuestion0 = document.getElementById("result-question-0");
    numberQuestion0 % 2 == 0 ? resultQuestion0.innerHTML = `O número  ${numberQuestion0} é par.` : resultQuestion0.innerHTML = `O número ${numberQuestion0} é ímpar`;
}



function checkAge() {
    const numberQuestion1 = Number(document.getElementById("number-question-1").value);
    const resultQuestion1 = document.getElementById("result-question-1");
    if (numberQuestion1 < 0) {
        resultQuestion1.innerHTML = "Idade inválida";
    }
    else if (numberQuestion1 > 0 && numberQuestion1 < 13) {
        resultQuestion1.innerHTML = "Você é uma criança";
    }
    else if (numberQuestion1 >= 13 && numberQuestion1 < 18) {
        resultQuestion1.innerHTML = "Você é um adolescente";
    }
    else if (numberQuestion1 >= 18 && numberQuestion1 < 60) {
        resultQuestion1.innerHTML = "Você é um adulto";
    }
    else {
        resultQuestion1.innerHTML = "Você é um idoso";
    }
}

function checkScore() {
    const numberQuestion2 = Number(document.getElementById("number-question-2").value);
    const resultQuestion2 = document.getElementById("result-question-2");
    if (numberQuestion2 < 0 || numberQuestion2 > 10) {
        resultQuestion2.innerHTML = "Nota inválida";
    }
    else if (numberQuestion2 >= 0 && numberQuestion2 < 5) {
        resultQuestion2.innerHTML = "Reprovado";
    }
    else if (numberQuestion2 >= 5 && numberQuestion2 < 7) {
        resultQuestion2.innerHTML = "Recuperação";
    }
    else {
        resultQuestion2.innerHTML = "Aprovado";
    }
}

const seeTheConsole = document.getElementById("see-the-console");
seeTheConsole.innerHTML = "Este texto foi gerado pelo JavaScript. Abra o console e depois clique no botão abaixo para iniciar.";

function consoleMenu() {
    console.log("Menu: \n1 - Opção 1 \n2 - Opção 2 \n3 - Opção 3 \n4 - Sair");
    const option = prompt("Escolha uma opção: ");
    switch (option) {
        case "1":
            console.log("Você escolheu a opção 1");
            break;
        case "2":
            console.log("Você escolheu a opção 2");
            break;
        case "3":
            console.log("Você escolheu a opção 3");
            break;
        case "4":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
            consoleMenu();
    }
}

