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
























