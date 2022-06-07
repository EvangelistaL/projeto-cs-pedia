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

        // finalizarAguardar();
    } else {
        window.location = "./login.html";
    }
}

function logOff() {
    sessionStorage.clear();
    window.location = "./login.html";
}

function votar(time){
    fetch("/usuarios/voto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: 2,
            idTimeServer: time,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert('Seu voto foi enviado com sucesso');
            graficoVotos();

        } else {
            throw ("Houve um erro ao tentar realizar o voto!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });
}

    function graficoVotos(){
        fetch(`/usuarios/graficoVotos`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    mostrarGrafico(resposta)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

function mostrarGrafico(resposta){
    const grafico = document.getElementById('graficoDeVotos');

    let donutChart = new Chart(grafico, {
        type: 'doughnut',
        data: {
            labels: ['Furia', 'Imperial', 'paiN', 'MIBR', 'GODSENT'],
            datasets: [{
                label: 'Votos',
                backgroundColor: ['#001f52', '#45e50b', '#cc0000', '#0073ff', '#ffee00'],
                data: []
            }]
        }
    }) 
    donutChart.datasets[0].data.push(resposta[0].votos);
    donutChart.datasets[1].data.push(resposta[1].votos);
    donutChart.datasets[2].data.push(resposta[2].votos);
    donutChart.datasets[3].data.push(resposta[3].votos);
    donutChart.datasets[4].data.push(resposta[4].votos);
}
