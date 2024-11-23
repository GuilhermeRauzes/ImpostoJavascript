let salario = document.querySelector('#salario');
let tempo = document.querySelector('#tempo');
let resultado = document.querySelector('span');
function fgts() {
    let salarioValue = parseFloat(salario.value)
    let tempoValue = parseFloat(tempo.value);
    let fgtsCalculado = (salarioValue / 100 * 8) * tempoValue;
    resultado.innerHTML = fgtsCalculado.toFixed(2);
}
