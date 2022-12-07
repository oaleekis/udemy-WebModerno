/* O cardápio de uma lanchonete é o seguinte:
Código              Descrição do Produto            Preço
100                 Cachorro Quente                 R$ 3,00
200                 Hambúrguer Simples              R$ 4,00
300                 Cheeseburguer                   R$ 5,50
400                 Bauru                           R$ 7,50
500                 Refrigerante                    R$ 3,50
600                 Suco                            R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.

 */


function cardapio(codigo, quantidade){

    switch (codigo) {
        case 100:
            return `R$ ${(quantidade * 3).toFixed(2)}`
            break;
        case 200:
            return `R$ ${(quantidade * 4).toFixed(2)}`
            break;
        case 300:
            return `R$ ${(quantidade * 5.50).toFixed(2)}`
            break;
        case 400:
            return `R$ ${(quantidade * 7.50).toFixed(2)}`
            break;
        case 500:
            return `R$ ${(quantidade * 3.50).toFixed(2)}`
            break;
        case 600:
            return `R$ ${(quantidade * 2.80).toFixed(2)}`
            break;
        default:
            return 'Produto não existente'
            break;
    }
}

console.log(cardapio(100, 5))
console.log(cardapio(200, 5))
console.log(cardapio(300, 5))
console.log(cardapio(400, 5))
console.log(cardapio(500, 5))
console.log(cardapio(600, 5))
console.log(cardapio(700, 5))