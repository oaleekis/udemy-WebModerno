{ 
    { 
        { 
            { 
                var naoFica = 'essa não fica localmente, o escopo é global' 
                let fica = "essá funciona apenas localmente"
            } 
        }
    }
}
console.log(naoFica)
// console.log(fica) não funciona está fora do escopo

function teste(){
    var local = 123
    console.log(local)
}
teste()
// console.log(local) fica apenas na função