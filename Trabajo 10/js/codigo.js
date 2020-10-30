var texto=prompt("Escribe una algo");

function infoCadena(cadena){
	cadena.replace(/ /g,'');
	var cadenaMayus=cadena.toUpperCase();
	var cadenaMin=cadena.toLowerCase();
	if (cadena==cadenaMayus) {
		return("La cadena solo contiene mayusculas")
	}else{
		if (cadena==cadenaMin) {
			return("La cadena solo contiene minusculas")
		}else{
			return ("La cadena contiene una combinacion de mayusculas y minusculas")
		}
	}
	
}
console.log(infoCadena(texto));