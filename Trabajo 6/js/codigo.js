var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero= prompt("Ingresa el numero");

if (numero <0 || numero>99999999) {
	alert("DNI incorrecto");
}

var letra= letras[numero%23];
var letraUser= prompt("Escribe la letra de tu DNI(Mayuscula)");

if (letraUser!=letra) {
	alert("La letra ingresada es incorrecta");
}else{
	alert("Los datos ingresados son correctos");
}