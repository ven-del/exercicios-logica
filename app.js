function parOuImpar() {
    const numberQuestion0 = Number(document.getElementById("number-question-0").value);
    const resultQuestion0 = document.getElementById("result-question-0");
    numberQuestion0 % 2 == 0 ? resultQuestion0.innerHTML = `O número  ${numberQuestion0} é par.` : resultQuestion0.innerHTML = `O número ${numberQuestion0} é ímpar`;
}

window.parOuImpar = parOuImpar;