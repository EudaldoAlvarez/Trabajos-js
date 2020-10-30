
var numero= prompt("Escribe un numero");

function par(num){
	if(numero%2 == 0){
		return true;
	}else{
		return false;
	}
}

if (par(numero)) {
	alert("Es par");
}else{
	alert("No es par");
}