
let listaProdutos = [
    {
        imagem: "img/Pc-All-In-One-Black.jpeg",
        alt: "Foto de um computador All In One Preto",
        nomeProduto: "Computador All In One Dell",
        preco: "R$2599,99",
        parcelas: "12"
    },
    {
        imagem: "img/tablet.jpeg",
        alt: "Foto de um tablet preto",
        nomeProduto: "Tablet Infomais Tech ",
        preco: "R$ 1699,99",
        parcelas: "12"
    },
    {
        imagem: "img/notebookwhite.jpg",
        alt: "Foto de um notebook branco",
        nomeProduto: "Notebook HP Branco",
        preco: "2199,95",
        parcelas: "12"
    },
    {
        imagem: "img/tabletWhite.jpeg",
        alt: "Foto de um tablet branco",
        nomeProduto: "Tablet Sony Branco",
        preco: "R$1899,99",
        parcelas: "12"
    },
    {
        imagem: "img/notebookgrey.jpg",
        alt: "Foto de um notebook cinza",
        nomeProduto: "Notebook LG Cinza",
        preco: "1799,98",
        parcelas: "12"
    },
    {
        imagem: "img/tablet2.jpeg",
        alt: "Foto de um tablet preto",
        nomeProduto: "Tablet AOC preto",
        preco: "1399,95",
        parcelas: "12"
    },
    {
        imagem: "img/comptApple.jpg",
        alt: "Foto de um Computador All In One da Apple",
        nomeProduto: "Computador All In One Apple",
        preco: "8799,98",
        parcelas: "12"
    },
    {
        imagem: "img/notebookdark.jpeg",
        alt: "Foto de um notebook preto",
        nomeProduto: "Notebook Positivo Preto",
        preco: "2799,95",
        parcelas: "12"
    }
]

function renderizarProdutos(){
    let loja = document.getElementById("espaco-produtos");

    let template = "";
    
    for (let i = 0; i < listaProdutos.length; i++) {
        const produto = listaProdutos[i];

        template += `<div class="produto-loja">
            <a href="#">
                <img src="${produto.imagem}" alt="${produto.alt}" class="imagem_compra">
                <p class="produto_pagina nome-produto text-center"> ${produto.nomeProduto}</p>
                <p class="preco_pagina preco-produto text-center"> <strong class="price-green"> ${produto.preco}</strong> em até <br> ${produto.parcelas}x sem juros</p>
            </a>
        </div>`
        loja.innerHTML = template;   
    }

}