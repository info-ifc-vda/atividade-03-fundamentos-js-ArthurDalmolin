const v = 30;
const d = 25;

function calcularDesconto() {
    const desconto = (v * d * 0.01);   
    return desconto;
}
const desc = calcularDesconto();
console.log ('o valor total é ' + (v - desc));
