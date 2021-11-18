
$(document).ready(function(){
    
    //CARROSEL NO BANNER DA HOMEPAGE com JQuery:
    $("#carrossel div:eq(0)").addClass("banner-ativo").show()

    setInterval(slide, 4500)

    function slide(){
        if( $(".banner-ativo").next().length ) {
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        } else {
            $(".banner-ativo").removeClass("banner-ativo").hide()
            $("#carrossel div:eq(0)").addClass("banner-ativo").show()
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
