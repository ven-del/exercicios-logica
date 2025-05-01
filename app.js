const checkTheConsole = document.querySelectorAll(".check-the-console");
checkTheConsole.forEach(element => {
    element.innerHTML = "Este texto foi gerado pelo JavaScript. Abra o console e depois clique no botão abaixo para iniciar.";
});

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

function calculateIMC() {
    const weightQuestion4 = Number(document.getElementById("weight-question-4").value);
    const heightQuestion4 = Number(document.getElementById("height-question-4").value) / 100;
    const resultQuestion4 = document.getElementById("result-question-4");
    const imc = weightQuestion4 / (heightQuestion4 * heightQuestion4);
    if (imc < 18) {
        resultQuestion4.innerHTML = "Abaixo do peso";
    }
    else if (imc >= 18 && imc < 24) {
        resultQuestion4.innerHTML = "Peso normal";
    }
    else if (imc >= 25 && imc < 29) {
        resultQuestion4.innerHTML = "Sobrepeso";
    }
    else {
        resultQuestion4.innerHTML = "Obesidade";
    }
}

function checkTriangle() {
    const sideAQuestion5 = Number(document.getElementById("side-a-question-5").value);
    const sideBQuestion5 = Number(document.getElementById("side-b-question-5").value);
    const sideCQuestion5 = Number(document.getElementById("side-c-question-5").value);
    const resultQuestion5 = document.getElementById("result-question-5");
    // não será feita a verificação se forma um triangulo. eu tô no celular. tenha pena de mim.
    if (sideAQuestion5 == sideBQuestion5 && sideBQuestion5 == sideCQuestion5) {
        resultQuestion5.innerHTML = "Triângulo equilátero";
    }
    else if (sideAQuestion5 != sideBQuestion5 && sideBQuestion5 != sideCQuestion5) {
        resultQuestion5.innerHTML = "Triângulo escaleno";
    }
    else {
        resultQuestion5.innerHTML = "Triângulo isósceles";
    }
}

function calculateApples() {
    const appleQuestion6 = Number(document.getElementById("apple-question-6").value);
    const resultQuestion6 = document.getElementById("result-question-6");
    let  applePrice;
    if (appleQuestion6 <= 0) {
        resultQuestion6.innerHTML = "Compre ao menos uma maçã!";
    }
    else if (appleQuestion6 < 12) {
        applePrice = .30;
    }
    else {
        applePrice = .25;
    }
    const totalPrice = appleQuestion6 * applePrice;
    resultQuestion6.innerHTML = `O preço total é R$ ${totalPrice.toFixed(2)}`;
}

function checkOrder() {
    const numberAQuestion7 = Number(document.getElementById("number-a-question-7").value);
    const numberBQuestion7 = Number(document.getElementById("number-b-question-7").value);
    const resultQuestion7 = document.getElementById("result-question-7");
    if (numberAQuestion7 < numberBQuestion7) {
        resultQuestion7.innerHTML = `Os números em ordem crescente ficam: ${numberAQuestion7}, ${numberBQuestion7}`;
    }
    else if (numberAQuestion7 > numberBQuestion7) {
        resultQuestion7.innerHTML = `Os números em ordem crescente ficam: ${numberBQuestion7}, ${numberAQuestion7}`;
    }
    else {
        resultQuestion7.innerHTML = "Os números não podem ser iguais";
    }
}


function countdownFrom10() {
    for (let i = 10; i >= 0 ; i--) {
        console.log(i);
    }
}

function printNumber() {
    const numberQuestion9 = Number(document.getElementById("number-question-9").value);
    const resultQuestion9 = document.getElementById("result-question-9");
    if (numberQuestion9 < 0) {
        resultQuestion9.innerHTML = "Número inválido";
    }
    else {
        output = "";
        for (let i = 0; i <= 10; i++) {
            output += `${numberQuestion9}<br>`;
        }
        resultQuestion9.innerHTML = output;
    }
}

function calculateSum() {
    // precisava mesmo de um for pra isso?
    const arrayQuestion10 = []
    const numberAQuestion10 = Number(document.getElementById("number-a-question-10").value);
    const numberBQuestion10 = Number(document.getElementById("number-b-question-10").value);
    const numberCQuestion10 = Number(document.getElementById("number-c-question-10").value);
    const numberDQuestion10 = Number(document.getElementById("number-d-question-10").value);
    const numberEQuestion10 = Number(document.getElementById("number-e-question-10").value);
    const resultQuestion10 = document.getElementById("result-question-10");

    arrayQuestion10.push(numberAQuestion10, numberBQuestion10, numberCQuestion10, numberDQuestion10, numberEQuestion10);
    sumQuestion10 = 0;
    for (let i = 0; i < arrayQuestion10.length; i++) {
        sumQuestion10 += arrayQuestion10[i];
    }

    resultQuestion10.innerHTML = `A soma dos números é ${sumQuestion10}`;
}