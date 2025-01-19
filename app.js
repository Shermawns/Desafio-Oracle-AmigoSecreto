let amigos = [];

function adicionarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    if(nome){
        amigos.push(nome); 
        console.log(`${nome} foi adicionado à lista de amigos.`);
        inputAmigo.value = ""

        const listName = document.getElementById("listaAmigos")
        const novoItem = document.createElement("li")

        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
    }else{
        alert("Por favor, insira um nome válido")
    }

}