function parOuImpar() {
    const numberQuestion0 = Number(document.getElementById("number-question-0").value);
    const resultQuestion0 = document.getElementById("result-question-0");
    numberQuestion0 % 2 == 0 ? resultQuestion0.innerHTML = `O número  ${numberQuestion0} é par.` : resultQuestion0.innerHTML = `O número ${numberQuestion0} é ímpar`;
}

window.parOuImpar = parOuImpar;

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

window.checkAge = checkAge;