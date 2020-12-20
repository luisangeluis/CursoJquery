$(document).ready(function(){
    $('.caja').first().css({
        background: 'red'
    });

    $('.caja').last().css({
        background: 'green'
    });

    $('.caja').eq(1).css({
        background: 'lightblue'
    });

    //puedes ser mas especifico con filter y selecciona los que contengan las mismas caracteristicas
    $('.caja').filter('#tercera').css({
        background:'orange'
    });

    //excluye las que contengan los siguientes elementos
    $('.caja').not('#segunda').css({
        color: 'yellow'
        
    });
});
