var x = 0

function mostrar_info(time){
    document.getElementById(time).style.display = 'flex'
    x++
    if(x == 2){
        document.getElementById(time).style.display = 'none'
        x = 0
    }
}

window.onload = function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id= sessionStorage.ID_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");    

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        console.log(nome)
        user_name.innerHTML = nome;
        user_name2.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "./login.html";
    }
}

function logOff() {
    sessionStorage.clear();
    window.location = "./login.html";
}