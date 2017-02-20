class Emociones {
	constructor(alegria, asco, ira, miedo, sorpresa, tristeza){
		this.alegria=alegria;
		this.asco=asco;
		this.ira=ira;
		this.miedo=miedo;
		this.sorpresa=sorpresa;
		this.tristeza=tristeza;
	}
}
aimst=new Emociones(0, 0, 0, 0, 0, 0);

var est = false

function estabilizadorOn(){
	est = true
}

function estabilizadorOff(){
	est = false
}
var x=0;

function estabilizadorEm(){
	if(est==true){
		intervalo = setInterval(function(){
			if(aimst.alegria>0){
				aimst.alegria--;
			}
			else if(aimst.alegria<0){
				aimst.alegria++;
			}
			console.log(aimst.alegria);

			if(aimst.asco>0){
				aimst.asco--;
			}
			else if(aimst.asco<0){
				aimst.asco++;
			}
			console.log(aimst.asco);

			if(aimst.ira>0){
				aimst.ira--;
			}
			else if(aimst.ira<0){
				aimst.ira++;
			}
			console.log(aimst.ira);

			if(aimst.miedo>0){
				aimst.miedo--;
			}
			else if(aimst.miedo<0){
				aimst.miedo++;
			}
			console.log(aimst.miedo);

			if(aimst.sorpresa>0){
				aimst.sorpresa--;
			}
			else if(aimst.sorpresa<0){
				aimst.sorpresa++;
			}
			console.log(aimst.sorpresa);

			if(aimst.tristeza>0){
				aimst.tristeza--;
			}
			else if(aimst.tristeza<0){
				aimst.tristeza++;
			}
			console.log(aimst.tristeza);

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