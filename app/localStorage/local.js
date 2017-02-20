function guardarMemorias(){
	window.localStorage.setItem("Palabras", JSON.stringify(memorias));
}
function obtenerMemorias(){
	var memoriasGuardadas=window.localStorage.getItem("Palabras");
	if(memoriasGuardadas!=null){
		memorias=JSON.parse(memoriasGuardadas);
	} else{
		alert("No hay memorias guardadas");
	}
}
function guardarTpe(){
	window.localStorage.setItem("Tpe", JSON.stringify(tpe))
}
function obtenerTpe(){
	var tpeGuardadas=window.localStorage.getItem("Tpe");
	if(tpeGuardadas!=null){
		tpe=JSON.parse(tpeGuardadas);
	} else {
		alert("No hay tpe's guardadas")
	}
}
