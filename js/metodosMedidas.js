$(document).ready(function(){

	let titulo = $('#titulo');
	let info = $('#info');
	//calculamos el ancho
	info.append('ancho: '+titulo.width()+'<br>');


	//calculamos el ancho mas el padding
	info.append('ancho mas el padding o ancho interno: '+titulo.innerWidth()+'<br>');

	//calculamos el ancho mas el padding mas el border
	info.append('ancho mas el padding mas el border o ancho externo: '+titulo.outerWidth()+'<br>');

	//calculamos el ancho mas el padding mas el border mas el margin
	info.append('ancho mas el padding mas el border mas el margin, o ancho externo: '+titulo.outerWidth(true)+'<br>');

	//calculamos el alto
	info.append('alto: '+titulo.height()+'<br>');

	//calculamos el alto mas el padding
	info.append('alto mas el padding o alto interno: '+titulo.innerHeight()+'<br>');

	//calculamos el alto mas el padding mas el border mas el margin
	info.append('alto mas el padding mas el border mas el margin, o alto externo: '+titulo.outerHeight(true)+'<br>');
});