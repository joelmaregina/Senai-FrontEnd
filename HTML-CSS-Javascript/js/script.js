
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

let numeroProdutos = 0;
let itensCarrinho = document.getElementById("itens-carrinho");
function contarProdutos (){
    numeroProdutos =+ 1;
    itensCarrinho.innerText = numeroProdutos;
}

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

//Apresenta Pop-up caso o cliente não preencha os campos
function validaFormulario () {
  if (document.getElementById("email").value == "" && document.getElementById("password").value == "" ){
    alert("Por favor preencha os campos e e-mail e senha")
  }
}

//Muda o formulário para um formulário de inscrição
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
        }, 1000)
}


//Retorna para a página de Login
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
