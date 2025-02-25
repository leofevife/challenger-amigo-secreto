let pessoas = [];



function nomeNoCampoDeTexto () {
    let inputNome = document.getElementById('amigo').value;

    if (inputNome === "") {
        alert("Insira um nome!");
        return;
    }
    amigos.push(inputNome);
    document.getElementById('amigo').value = "";
    atualizarListaAmigos();
}


function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(function(amigo) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    });
}


function sorteioIndividual() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let amigosEmbaralhados = amigos.slice();

    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

}

let amigoSorteado = amigosEmbaralhados[0];

let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
















