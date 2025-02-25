
let amigos = [];


function addAmigo() {
    const inputNome = document.getElementById('amigo').value;

    if (inputNome === "") {
        alert("Por favor, insira um nome.");
        return;
    } 

    amigos.push(inputNome);
    document.getElementById('amigo').value = "";
    atualizarListaAmigos();
}


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(function(amigo) {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    });
}


function sorteioInd() {
    if (amigos.length < 2) {
        alert("Por favor, adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let amigosEmbaralhados = amigos.slice();

    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    
    const amigoSorteado = amigosEmbaralhados[0];  
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
















