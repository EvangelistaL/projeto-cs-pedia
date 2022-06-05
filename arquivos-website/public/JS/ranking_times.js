var x = 0

function mostrar_info(time){
    document.getElementById(time).style.display = 'flex'
    x++
    if(x == 2){
        document.getElementById(time).style.display = 'none'
        x = 0
    }
}
