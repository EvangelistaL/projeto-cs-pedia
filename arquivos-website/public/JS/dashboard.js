function mostrarDados(dados, grafico, grafico2){
    esconderDados()
    document.getElementById(dados).style.display = 'flex'
    document.getElementById('gunGraph').style.width = '600px'
    document.getElementById('gunGraph').style.heigth = '600px'
    document.getElementById(grafico).style.width = '500px'
    document.getElementById(grafico2).style.heigth = '500px'
}2

function esconderDados(){
    document.getElementById('infoAk').style.display = 'none'
    document.getElementById('infoM4s').style.display = 'none'
    document.getElementById('infoM4').style.display = 'none'
    document.getElementById('infoAwp').style.display = 'none'
    document.getElementById('infoGalil').style.display = 'none'
    document.getElementById('infoFamas').style.display = 'none'
    document.getElementById('infoSg553').style.display = 'none'
    document.getElementById('infoAug').style.display = 'none'
    document.getElementById('infoG3').style.display = 'none'
    document.getElementById('infoScar').style.display = 'none'
    document.getElementById('infoScout').style.display = 'none'
    document.getElementById('infoP250').style.display = 'none'
    document.getElementById('infoCz75').style.display = 'none'
    document.getElementById('infoDual').style.display = 'none'
    document.getElementById('infoDeagle').style.display = 'none'
    document.getElementById('infoP2000').style.display = 'none'
    document.getElementById('infoUsp').style.display = 'none'
    document.getElementById('info57').style.display = 'none'
    document.getElementById('infoTec9').style.display = 'none'
    document.getElementById('infoGlock').style.display = 'none'
    document.getElementById('infoR8').style.display = 'none'
    document.getElementById('infoMp5').style.display = 'none'
    document.getElementById('infop90').style.display = 'none'
    document.getElementById('infoUmp45').style.display = 'none'
    document.getElementById('infoMp7').style.display = 'none'
    document.getElementById('infoBizon').style.display = 'none'
    document.getElementById('infoMp9').style.display = 'none'
    document.getElementById('infoMac10').style.display = 'none'
    document.getElementById('infoXm1014').style.display = 'none'
    document.getElementById('infoNova').style.display = 'none'
    document.getElementById('infoMag7').style.display = 'none'
    document.getElementById('infoCanocurto').style.display = 'none'
    document.getElementById('infoM249').style.display = 'none'
    document.getElementById('infoNegev').style.display = 'none'
}

function validarSessao() {
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
        user_name.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "./login.html";
    }
}

function logOff() {
    sessionStorage.clear();
    window.location = "./login.html";
}