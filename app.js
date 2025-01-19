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

function sortearAmigo(){
    if(amigos.length > 0){
        const num = Math.floor(Math.random() * amigos.length);
        const amgSort = amigos[num]
        console.log(`Amigo sorteado: ${amgSort}`);

        const resultado = document.getElementById("resultado")
        resultado.textContent = `Amigo sorteado: ${amgSort}`;

        const listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

    }else{
        alert("Por favor, para realizar o sorteio é necessário inserir o nome dos seus amigos.")
    }
}