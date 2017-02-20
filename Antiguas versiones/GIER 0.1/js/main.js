class Memorias{
	constructor(palabra, respuestas){
		this.palabra=palabra;
		this.respuestas=respuestas;
	}
}
memorias=[]
function Decir() {
	return prompt("Dile algo a GIER")
}
function Escuchar() {
	palabra = Decir();
	respondio = false;
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
		}
	}
}
function Aprender(palabra){
	memorias_nuevas=[];
	memorias_nuevas= new Memorias(palabra, prompt("¿Que debo decir?"));
	memorias.push(memorias_nuevas);
	alert("Palabra aprendida.");
}