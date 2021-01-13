

$(document).ready(function(){
//		alert('hola');

	let nombre;
	$('#nombre').on({
		change: function(){


			//nombre = $('#nombre');
			//$('#titulo').text(nombre.val());
			$('#enlace').text('falconmaster');

			$('#enlace').attr('href','https//www.falconmaster.com');
			
		}

	})
});