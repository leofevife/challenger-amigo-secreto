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


























