$(document).ready(function(){

	let btnAgregar=document.getElementById('agregar');
	let cont=1;
	//let contenedor = document.getElementById('contenedor');
	let contenedor = $('#contenedor');



	$(btnAgregar).on({

		click: function(){
			let caja= $('<div></div>').attr('class','caja').text(cont);
			cont++;
			//contenedor.before(caja);
			//contenedor.after(caja);
			//contenedor.append(caja);
			contenedor.prepend(caja);


		}
	});

});