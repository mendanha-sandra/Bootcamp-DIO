function comparativo() {
    
    alert('Compara dois números e mostra a soma.');
    let num1 = Number(prompt('Digite o primeiro número: '));
    let num2 = Number(prompt('Digite o segundo número: '));
    let simNão = `não`;
    let soma;
    let comparaMaior10;
    let comparaMenor20;
    
    if (num1 === num2) {
        simNão = ``;
    }
    
    soma = num1 + num2;

    if (soma>10) {
        comparaMaior10 = `O número ${soma} é maior que 10.`;
    }else if (soma<10) {
        comparaMaior10 = `O número ${soma} é menor que 10.`;
    } else {
        comparaMaior10 = `O número ${soma} é igual a 10.`;
    }

    if (soma>20) {
        comparaMenor20 = ` O número ${soma} é maior que 20.`;
    } else if (soma<20) {
        comparaMenor20 = ` O número ${soma} é menor que 20.`;
    } else {
        comparaMenor20 = ` O número ${soma} é igual a 20.`;
    }{
        
    }

   alert(`Os números ${num1} e ${num2} ${simNão} são iguais. A soma dos dois números é igual a ${soma} . ${comparaMaior10} ${comparaMenor20}`);

  
}
comparativo();