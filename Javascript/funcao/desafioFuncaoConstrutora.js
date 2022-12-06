function criarPessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }

}

const p1 = criarPessoa('Alex')
p1.falar()