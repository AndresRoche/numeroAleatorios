
//varibles

var min_html = document.getElementById('min');
var min;

var max_html = document.getElementById('max');
var max;

var dale = document.getElementById('Dale');



dale.addEventListener('click', numeroAleatorios);



function numeroAleatorios(argument)
{
	min = parseInt(min_html.value);
	max = parseInt(max_html.value);

	// Retorna un entero aleatorio entre min (incluido) y max (excluido)
	// ¡Usando Math.round() te dará una distribución no-uniforme!
	// math.ceil
	var r = Math.random();

  	var resultado = Math.floor(r * (max - min + 1)) + min ;


	document.getElementById('numero').innerHTML = resultado;

	console.log(min + ", " + max + ", " + resultado + "\n" + r);


	min = 0;
	max = 0;
}




/*


// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function numeroAleatorios(argument) {
	


	var cantidadDigitos = document.getElementById('cantidadDigitos').value;
	cantidadDigitos = parseInt(cantidadDigitos);

	var numero = parseInt(Math.random() * cantidadDigitos);
	
	document.writeln("<p>"+numero+"</p>");

	document.getElementById('js').innerHTML='tu peso en ' + Planeta + ' es : ' + Peso_Final + 'Kg';
	
}*/