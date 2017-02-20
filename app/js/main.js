var memoria={
	"palabra": "",
	"respuestas": []
}
memorias=[]

function Decir() {
	return prompt("Dile algo a GIER")
}
function Escuchar() {
	var palabra = Decir();
	obtenerMemorias();
	var respondio = false;
	for (i in memorias) {
		if(palabra==memorias[i].palabra){
			Responder(palabra);
			respondio=true;
		}
	}
	if(respondio==false){
		Aprender(palabra);
	}
}
function Responder(palabra){
	for (i in memorias) {
		if(palabra==memorias[i].palabra){
			alert(memorias[i].respuestas);
			efectoAimst(palabra)
		}
	}
}
function Aprender(palabra){
	memoria={"palabra": palabra, "respuestas": prompt("¿Que debo decir?")}
	memorias.push(memoria);
	guardarMemorias();
	alert("Palabra aprendida.");
}
