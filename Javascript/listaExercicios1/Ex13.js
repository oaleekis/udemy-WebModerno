/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */



let dia = 3

switch (dia) {
    case 1:
        console.log(`Hojé é domingo, final de semana`)
        break;
    case 2:
        console.log(`Hojé é segunda, dia de semana`)
        break;
    case 3:
        console.log(`Hojé é terça, dia de semana`)
        break;
    case 4:
        console.log(`Hojé é quarta, dia de semana`)
        break;
    case 5:
        console.log(`Hojé é quinta, dia de semana`)
        break;
    case 6:
        console.log(`Hojé é sexta, dia de semana`)
        break;
    case 7:
        console.log(`Hojé é sabado, final de semana`)
        break;

    default:
        console.log('Dia invalido');
        break;
}