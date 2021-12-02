
let listaProdutos = [
    {
        imagem: "img/controlDoublePS.jpeg",
        alt: "Foto dos Controles Duplo para Playstation",
        nomeProduto: "Controle Duplo - Playstation",
        preco: "R$ 559.98",
        parcelas: "12"
    },
    {
        imagem: "img/controlNintendoSwift.jpeg",
        alt: "Foto de Controles coloridos para Nintendo Swift",
        nomeProduto: "Controles Nintendo Swift",
        preco: "R$ 359,99",
        parcelas: "12"
    },
    {
        imagem: "img/controlWhiteXbox.jpeg",
        alt: "Foto do Controle branco para Xbox",
        nomeProduto: "Controle Xbox Branco",
        preco: "R$ 459,99",
        parcelas: "12"
    },
    {
        imagem: "img/ControlLights.jpeg",
        alt: "Foto de Controle Luminoso",
        nomeProduto: "Controle Lights X7",
        preco: "R$ 779,99",
        parcelas: "12"
    },
    {
        imagem: "img/controlWhiteGenX.jpeg",
        alt: "Foto do controle Universal Gen X",
        nomeProduto: "controle Universal Gen X",
        preco: "R$ 819,98",
        parcelas: "12"
    },
    {
        imagem: "img/controlPopIt.jpg",
        alt: "Foto do Controle Pop It para crianças",
        nomeProduto: "Controle PopIt Infantil",
        preco: "R$ 13,95",
        parcelas: "2"
    },
    {
        imagem: "img/controlXboxPreto.jpeg",
        alt: "Foto do controle para Xbox",
        nomeProduto: "Controle Xbox Preto",
        preco: "R$ 399,98",
        parcelas: "12"
    },
    {
        imagem: "img/controlVR.jpeg",
        alt: "Foto do Contrle manual para VR",
        nomeProduto: "Controle para jogos VR",
        preco: "R$ 479,99",
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