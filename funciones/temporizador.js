const txt_temporizador = document.getElementById('temporizador');
var temporizador;




document.getElementById('btn').addEventListener('click', () => {

	temporizador = parseInt(txt_temporizador.value);
	
	if (temporizador < 60 && temporizador > 0) {

		console.log(temporizador);
	} else {
		console.warn('el numero tiene que ser Menor de 60 o mayor de 0');
	}

})



/*

todo el codigo de aqui debajo es para hacer los mismo solo que 
lo vi en un video y no llege a entender del todo... pero luego 
encontre otra forma de hacer mucho mas facil que esto :P



function Temporizador(id, inicio, final)
{
	this.id = id;
	this.inicio = inicio;
	this.final = final;
	this.contador = this.inicio;

	this.conteoSegundos = function()
	{
		if (this.contador == this.final) 
		{
			this.conteoSegundos = null;
			return;
		}


		document.getElementById(this.id).innerHTML = this.contador--;
		setTimeout(this.conteoSegundos.bind(this), 1000);
	}

}


let temporizado = new Temporizador('temporizador', 12, 0);
//temporizado.conteoSegundos();
*/