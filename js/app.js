// Array para armazenar os nomes dos amigos
let amigos = [];

// Elementos DOM constantes para lista de amigos e sorteio
const listaAmigosElement = document.getElementById('lista-amigos');
const listaSorteioElement = document.getElementById('lista-sorteio');

// Função para adicionar nomes à lista de amigos
function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    // Verifica se o campo de nome está vazio
    if (amigo.value === '') {
        alert('Informe o nome do amigo.');
        return;
    }

    // Converte o nome para maiúsculas para evitar diferenciação
    const nomeMaiusculo = amigo.value.toUpperCase();

    // Verifica se o nome já está cadastrado
    if (amigos.includes(nomeMaiusculo)) {
        alert('Nome já cadastrado!');
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nomeMaiusculo);
    amigo.value = '';

    // Atualiza a lista de amigos e o sorteio
    atualizarLista();
    atualizarSorteio();
}

// Função para sortear os amigos
function sortear() {
    // Valida se há pelo menos 3 amigos para o sorteio
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos!');
        return;
    }

    // Embaralha a lista de amigos
    embaralhar(amigos);

    let sorteioHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        // Cria a string de sorteio
        sorteioHTML += `${amigos[i]} --> ${i === amigos.length - 1 ? amigos[0] : amigos[i + 1]}<br>`;
    }

    // Atualiza o elemento DOM com o sorteio
    listaSorteioElement.innerHTML = sorteioHTML;
}

// Função para excluir um amigo da lista
function excluirAmigo(index) {
    amigos.splice(index, 1);
    // Atualiza a lista de amigos e o sorteio
    atualizarLista();
    atualizarSorteio();
}

// Função para embaralhar a lista de amigos
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // Atribuição via destructuring para trocar elementos
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Função para limpar o sorteio
function atualizarSorteio() {
    // Limpa o elemento DOM do sorteio
    listaSorteioElement.innerHTML = '';
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    // Limpa o elemento DOM da lista de amigos
    listaAmigosElement.innerHTML = '';

    // Itera sobre a lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });

        // Adiciona o parágrafo à lista de amigos
        listaAmigosElement.appendChild(paragrafo);
    }
}

// Função para reiniciar o sorteio
function reiniciar() {
    // Limpa a lista de amigos e os elementos DOM
    amigos = [];
    listaAmigosElement.innerHTML = '';
    listaSorteioElement.innerHTML = '';
}
