var aimst={alegria: 0, asco: 0, ira: 0, miedo: 0, sorpresa: 0, tristeza: 0};

var est = false;

var tpe = [];

function efectoEm(){
	var palabra=prompt("¿A que palabra le daras atributos?");
	obtenerMemorias();
	var respondio = false
	for (var i in memorias) {
		if(palabra==memorias[i].palabra){
			var tipo=prompt("¿Que tipo de palabra es?")
			alert("Ahora dime qué efectos hara en mis emociones(Numeros entre -10 a 10, donde 10 es el mas alto y -10 el mas bajo");
			aimst.alegria=aimst.alegria+parseInt(prompt("¿Cuanta felicidad?:"));
			aimst.asco=aimst.asco+parseInt(prompt("¿Cuanto asco?:"));
			aimst.ira=aimst.ira+parseInt(prompt("¿Cuanta ira ?:"));
			aimst.miedo=aimst.miedo+parseInt(prompt("¿Cuanto miedo?:"));
			aimst.sorpresa=aimst.sorpresa+parseInt(prompt("¿Cuanta sorpresa?:"));
			aimst.tristeza=aimst.tristeza+parseInt(prompt("¿Cuanta tristeza?:"));
			var nuevaTpe = {tipo: tipo , palabra: palabra, aimst: aimst};
			tpe.push(nuevaTpe)
			guardarTpe();
			respondio=true;
		}
	}
	if(respondio==false){
		alert("No se esa palabra, enseñamela");
		Aprender(palabra);
	}
}

function efectoAimst(palabra){
	obtenerTpe();
	var existePalabra=false;
	for (var i in tpe) {
		if(palabra==tpe[i].palabra){
			aimst.alegria=tpe[i].aimst.alegria+aimst.alegria;
			aimst.asco=tpe[i].aimst.asco+aimst.asco;
			aimst.ira=tpe[i].aimst.ira+aimst.ira;
			aimst.miedo=tpe[i].aimst.miedo+aimst.miedo;
			aimst.sorpresa=tpe[i].aimst.sorpresa+aimst.sorpresa;
			aimst.tristeza=tpe[i].aimst.tristeza+aimst.tristeza;
			existePalabra=true
		}
	}
	if(existePalabra==false){
		console.log("No existe efecto alguno de la palabra")
	}
}

function estabilizadorOn(){
	est = true
}

function estabilizadorOff(){
	est = false
}

function estabilizadorEm(){
	if(est==true){
		var x=0;
		intervalo = setInterval(function(){
			if(aimst.alegria>0){
				aimst.alegria--;
			}
			else if(aimst.alegria<0){
				aimst.alegria++;
			}
			$(".alegria").text(aimst.alegria);

			if(aimst.asco>0){
				aimst.asco--;
			}
			else if(aimst.asco<0){
				aimst.asco++;
			}
			$(".asco").text(aimst.asco);

			if(aimst.ira>0){
				aimst.ira--;
			}
			else if(aimst.ira<0){
				aimst.ira++;
			}
			$(".ira").text(aimst.ira);

			if(aimst.miedo>0){
				aimst.miedo--;
			}
			else if(aimst.miedo<0){
				aimst.miedo++;
			}
			$(".miedo").text(aimst.miedo);

			if(aimst.sorpresa>0){
				aimst.sorpresa--;
			}
			else if(aimst.sorpresa<0){
				aimst.sorpresa++;
			}
			$(".sorpresa").text(aimst.sorpresa);

			if(aimst.tristeza>0){
				aimst.tristeza--;
			}
			else if(aimst.tristeza<0){
				aimst.tristeza++;
			}
			$(".tristeza").text(aimst.tristeza);

			x=x+1; // Contador.

			console.log(x);
			if(est==false){
				clearInterval(intervalo);
				console.log("El estabilizador se ha apagado");
			}
		}, 5000)
	}
	else if(est==false){
		console.log("El estabilizador esta apagado")
	}
}