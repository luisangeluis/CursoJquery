/*
let boton;

boton = document.getElementById('boton');


$(document).ready(function(){
    boton.addEventListener("click", function () {
        alert('hola')
    });
});
*/

function efecto() {
    //alert('hola');
    //$(selector).efecto(velocidad,callback);

    //para ocultar el elemento o selector
    /*
    $('.caja').hide(1500,function(){
        alert('oculto');
    });
    */
    //para alternar entre ocultar y mostrar
    $('.caja').toggle(1500, function () {
        alert('oculto');
    });

}


/*
$(document).ready(function(){
    alert();
});
*/
