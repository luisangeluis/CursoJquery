$(document).ready(function () {
    //$('#padre');

    //Sirve para acceder al elemento padre de 3ra mediante encadenamiento
    /*
//parent()
    $('#tercera').parent().css({

        background: 'gray'
    });
    */
    //parents()
    //Sirve para acceder a todos los elementos padre de mas arriba
    /*
    $('#tercera').parents().css({
        background: 'pink'
    });
 
    */
    //children
    //Seleccion todos los elementos hijo
    //Aqui le aplicas el efecto a todos
    //$('#padre').children().fadeOut(2000);

    //aqui seleccionas todos elementos hijos y despues filtras para seleccionar uno
    //$('#padre').children('#tercera').fadeOut(2000);

    //find
    //Find busca a partir de los hijos en todos los niveles y le puedes especificar que buscar

    //$('#contenedor').find('div.caja').slideUp();

    //siblings Seleciona los elementos hermanos

    //$('#tercera').siblings().fadeOut(1000);

    //Next Prev selecciona los anteriores o los posteriores o tambien que sean hermanos
    // NexAll PrevAll

    $('#tercera').prev().css({
        background:'green'
    });
    $('#tercera').next().css({
        background: 'red'
    });






});