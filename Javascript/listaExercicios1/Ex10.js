/*  Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function verificar(numero){

    if(numero % 3 === 0){
        console.log(`${numero} é divisivel por 3`);
    }else {
        console.log(`${numero} não é divisivel por 3`);
    }
}


verificar(9)

