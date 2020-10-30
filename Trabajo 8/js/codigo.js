
var variable = prompt("Escribe algo para verificar si es un palindromo");

function Palindromo (cadena){
	var cadenaInvert=cadena.split().reverse().join();
	cadena.replace(/ /g,"").toLowerCase();
	cadenaInvert.replace(/ /g,"").toLowerCase();
	
	if(cadena==cadenaInvert){
		alert("Es palindromo");
	}else{
		alert("No es palindromo");
	}
}

alert(Palindromo(variable));
