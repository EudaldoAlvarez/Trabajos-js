
var variable = prompt("Escribe algo para verificar si es un palindromo");

function Palindromo(cadena){
	var clean = cadena.toLowerCase().replace(/ /g,'');
	var cadenaInvert=clean.split().reverse().join();
	
	if(clean==cadenaInvert){
		alert("Es palindromo");
	}else{
		alert("No es palindromo");
	}
}

Palindromo(variable);
