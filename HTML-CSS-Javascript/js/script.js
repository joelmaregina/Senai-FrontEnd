
$(document).ready(function(){
    
    //CARROSEL NO BANNER DA HOMEPAGE com JQuery:
    $("#carrossel div:eq(0)").addClass("banner-ativo").show()

    setInterval(slide, 4500)

    function slide(){
        if( $(".banner-ativo").next().length ) {
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").fadeIn()
        } else {
            $(".banner-ativo").removeClass("banner-ativo").hide()
            $("#carrossel div:eq(0)").addClass("banner-ativo").fadeIn()
        }
    }

    // Alternando MENU com toggleClass do jQuery:
    $("#barras").click(function(){
        $("#menu").toggleClass("menu-ativo")

                // if($("#menu").hasClass("menu-ativo")){
        //     $("#menu").removeClass("menu-ativo")            
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }
    })
})

//Para implementar um carrinho
// let numeroProdutos = 0;
// let itensCarrinho = document.getElementById("itens-carrinho");
// function contarProdutos (){
//     numeroProdutos =+ 1;
//     itensCarrinho.innerText = numeroProdutos;
// }

// Alternando MENU com JavaSctipt:
// let menu = document.getElementById("menu");
// function mostraMenu (){
//     if(getComputedStyle(menu).display == "none"){
//         menu.style.display = "flex"
//     }else {
//         menu.style.display = "none"
//     }
// }

let email = document.getElementById("email");
function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado);
}

//Apresenta Pop-up caso o cliente não preencha os campos de Login corretamente
function validaFormularioLogin () {
  if (document.getElementById("email").value == "" && document.getElementById("password").value == "" ){
    alert("Por favor preencha os campos e e-mail e senha")
  }
}

//Apresenta Pop-up caso o cliente não preencha os campos de Inscrição corretamente
function validaFormularioInscricao () {
    if (document.getElementById("name").value == "" && document.getElementById("email").value == "" && document.getElementById("email").value == "" && document.getElementById("password").value == "" && document.getElementById("password-repeat").value == "" && document.getElementById("tel").value == "" ){
      alert("Por favor preencha todos os campos solicitados para prosseguir com o seu cadastro")
    }
  }

//JavaScript para avaliar se as senhas do forms de incrição coincidem
function validaSenha() {
    var password = document.querySelector("#password1");
    var passwordRepeat =  document.querySelector("#password-repeat");
    if(password.value != passwordRepeat.value){
        alert("As senhas não coincidem. Preencha novamente os campos de senha.")
        event.preventDefault()
    }
}

//Muda o formulário para um formulário de inscrição com jQuery
$("#inscricao").click(renderizaInscricao)

function renderizaInscricao(){
    $(".formulario-login").hide();
    $(".formulario-inscricao").fadeIn();
    $(".muda-para-inscricao").hide();
    $(".muda-para-login").fadeIn();
    $(".esqueceu-senha").hide();
    $("#tituloDaPagina").text("Inscrição");
    $(".chamadaFormulario").text("Inscreva-se com:");
    scrollPagina(); 
}

function scrollPagina(){
    var topoPagina = $("#tituloDaPagina").offset().top;
    $("html, body").animate(
        {
            scrollTop: topoPagina  + "px"
        }, 800)
}


//Retorna para a página de Login com jQuery
$("#voltar-para-login").click(voltaParaLogin)

function voltaParaLogin(){
    $(".formulario-inscricao").hide();
    $(".formulario-login").fadeIn();
    $(".muda-para-login").hide();
    $(".muda-para-inscricao").fadeIn();
    $(".esqueceu-senha").show();
    $("#tituloDaPagina").text("Login");
    $(".chamadaFormulario").text("Faça login na sua conta com:");
    scrollPagina();
}

//Implementando busca na página com JavaScript:
var busca = document.querySelector(".campo-busca");

busca.addEventListener("input", function(){
    console.log(this.value);
    var produtos = document.querySelectorAll(".produto");
    var banner = document.querySelector(".banner-paginas");

    if (this.value.length > 0) {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            var divProduto = produto.querySelector(".nome-produto");
            var conteudo = divProduto.textContent;
            var expressao = new RegExp(this.value, "i");
            if (!expressao.test(conteudo)){
                produto.classList.add("invisivel");
            } else {
                produto.classList.remove("invisivel");
                banner.classList.add("invisivel");                
            }
        }
    } else {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            produto.classList.remove("invisivel");
        }
        banner.classList.remove("invisivel");
    }
 
})
