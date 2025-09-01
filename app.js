let amigos = [];
let novoAmigo;
let amigo;

function atualizarListaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(amigo of amigos){
        lista.append(amigo);
        lista.append('\n');
    }
}

function adicionarAmigo(){
    novoAmigo = document.querySelector('input').value;
    if(novoAmigo == ''){
        alert('Por favor, insira um nome válido!');
    }else{
        if(amigos.includes(novoAmigo)){
            alert("Voce já inseriu este nome! Insira outro nome! ");
        }else{
            amigos.push(novoAmigo);
            atualizarListaDeAmigos();
        }
        
    }
    limparCampo();
}

function sortearAmigo(){
    if(amigos == ""){
        alert("Você deve adicionar amigos a sua lista antes de sortear!");
    }else{
        let indiceAmigo = Math.floor(Math.random() * (amigos.length));
        let amigoSorteado = amigos[indiceAmigo];
        console.log(amigoSorteado);
        console.log(indiceAmigo);
        let campo = document.getElementById('resultado');
        campo.innerHTML = "O amigo sorteado foi: "+ amigoSorteado;

    }
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}


