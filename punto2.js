// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function punto2() {
	var cara = new String();
	var cade = new String();
	var vocal = new Number();
	var longit = new Number();
	var i = new Number();
	vocal = 0;
	document.write("ingrese el texto",'<BR/>');
	cade = prompt();
	longit = cade.length;
	cade = String.toLowerCase(cade);
	for (i=1;i<=longit;i++) {
		cara = String.substring(cade,i-1,i);
		if (cara=="a" || cara=="e" || cara=="i" || cara=="o" || cara=="u") {
			vocal = vocal+1;
		}
	}
	document.write("La cantidad de vocales que contiene el texto son: ",vocal,'<BR/>');
}

