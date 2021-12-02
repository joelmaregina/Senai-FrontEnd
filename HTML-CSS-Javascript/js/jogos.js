
let listaProdutos = [
    {
        imagem: "img/justDance.jpg",
        alt: "Foto do Jogo Just Dance 2021",
        nomeProduto: "Just Dance 2021",
        preco: "R$ 159.98",
        parcelas: "10"
    },
    {
        imagem: "img/donkeyKong.png",
        alt: "Foto do jogo Donkey Kong",
        nomeProduto: "Donkey Kong Retrô",
        preco: "R$ 99,99",
        parcelas: "8"
    },
    {
        imagem: "img/mortalKombat.png",
        alt: "Foto do jogo Mortal Kombat",
        nomeProduto: "Mortal Kombat",
        preco: "R$ 139,99",
        parcelas: "10"
    },
    {
        imagem: "img/minecraft.jpeg",
        alt: "Foto do jogo minecraft",
        nomeProduto: "Minecraft 2021",
        preco: "R$ 179,99",
        parcelas: "12"
    },
    {
        imagem: "img/pacMan.jpg",
        alt: "Foto do jogo Pac Man",
        nomeProduto: "Pac Man 2022",
        preco: "R$ 119,98",
        parcelas: "10"
    },
    {
        imagem: "img/marioBross.png",
        alt: "Foto do jogo Mario Bross",
        nomeProduto: "Jogo Mario Bross Retrô",
        preco: "R$ 139,95",
        parcelas: "10"
    },
    {
        imagem: "img/sonic.png",
        alt: "Foto do jogo do Sonic the Hedgehog",
        nomeProduto: "Sonic the Hedgehog",
        preco: "R$ 99,98",
        parcelas: "10"
    },
    {
        imagem: "img/theSims4.jpg",
        alt: "Foto do jogo The Sims 4",
        nomeProduto: "The Sims 4",
        preco: "R$ 79,99",
        parcelas: "12"
    }
]

function renderizarProdutos(){
    let loja = document.getElementById("espaco-produtos");

    let template = "";
    
    for (let i = 0; i < listaProdutos.length; i++) {
        const produto = listaProdutos[i];

        template += `<div class="produto-loja produto">
            <a href="#">
                <img src="${produto.imagem}" alt="${produto.alt}" class="imagem_compra">
                <p class="produto_pagina nome-produto text-center"> ${produto.nomeProduto}</p>
                <p class="preco_pagina preco-produto text-center"> <strong class="price-green"> ${produto.preco}</strong> em até <br> ${produto.parcelas}x sem juros</p>
            </a>
        </div>`
        loja.innerHTML = template;   
    }

}