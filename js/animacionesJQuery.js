$('document').ready(function(){

	const btn = document.getElementById('boton');
	const caja = document.getElementsByClassName('caja')

	$(btn).on({
		click: function(){
			//alert('hola');
			//$(elemento).animate({parametros},velocidad,callback);
			$('.caja').animate({
				
				width: '+=300px',
				//width: '300px',

				//opacity: '0.2'
				/*
				*/
				//marginLeft: '+=300px'
			},
			1000,function(){
				//alert('se agrando')

				//$(caja).classList.add('animacion')

			});
			//(caja).toggleClass('animacion');

			$('.caja').animate({
								width: '-=300px',

			},1000,function(){

			});
			

			
		}
	})
});
