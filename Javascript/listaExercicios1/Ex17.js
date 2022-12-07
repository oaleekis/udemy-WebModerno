/*  Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano       Aumento
A           10%
B           15%
C           20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

function planoTrabalho(plano, salario){

    switch (plano) {
        case 'a':
            
            return salario + (salario * 0.10)
            break;
        case 'b':
            return salario + (salario * 0.15)
            break;
        case 'c':
            return salario + (salario * 0.20)
            break;
        default:
            return 'plano invalido'
            break;
    }
}


console.log(planoTrabalho('a', 1500));
console.log(planoTrabalho('b', 1500));
console.log(planoTrabalho('c', 1500));
console.log(planoTrabalho('d', 1500));