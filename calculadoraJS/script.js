function calculadora(){
    let operacao = Number(prompt('Escolha uma operação: \n 1- Soma \n 2- Subtração \n 3- Multiplicação \n 4- Divisão \n 5-Divisão real (mostra o resto da divisão) \n 6- Potenciação'));

let n1 = Number(prompt ('Insira o primeiro número: '));
let n2 = Number(prompt ('Insira o segundo número: '));

switch (operacao) {
    case 1:
        soma();
        break;
    case 2:
        sutracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisao();
        break;
    case 5:
        divisaoReal();
        break;
    case 6:
        potenciacao();
        break;
    default:
        break;
}      
function novaOperacao() {
    let opcao = Number(prompt('Deseja fazer nova operação? \n 1- sim \n 2- não'))
    if (opcao == 1) {
        calculadora();
    }else if (opcao == 2) {
        alert('Até mais!')
    }
    
}
function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
}
function sutracao(){
    resultado = n1 - n2;
    alert(n1 + " - " + n2 + " = " + resultado);
    novaOperacao();
}
function multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1} X ${n2} = ${resultado}`);
    novaOperacao();
}
function divisao(){
    resultado = n1 / n2;
    alert(`${n1} : ${n2} = ${resultado}`);
    novaOperacao();
}
function divisaoReal(){
    resultado = n1 % n2;
    alert(`O restante da divisão de ${n1} por ${n2} é igual a ${resultado}`);
    novaOperacao();
}
function potenciacao(){
    resultado = n1 ** n2;
    alert(`${n1} elevado por ${n2} = ${resultado}`);
    novaOperacao();
}

}

calculadora();

