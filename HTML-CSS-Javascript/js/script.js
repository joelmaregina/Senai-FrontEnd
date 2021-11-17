let menu = document.getElementById("menu");

function mostraMenu (){
    if(getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    }else {
        menu.style.display = "none"
    }
}

let email = document.getElementById("email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado);
}
