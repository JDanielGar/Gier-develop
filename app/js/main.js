var memoria = {
    "palabra": "",
    "respuestas": []
}

memorias = []

$("#text-button").click(function(){
    Escuchar()
});
$(document).keypress(function(e) {
    if(e.which == 13) {
        Escuchar();
    }
});

 // Metodo para obtener la palabra del usuario final

function Decir() {
    return $("input").val();
}

function Escuchar() {
    var palabra = Decir();
    $(".messages").append($("<li><b>Tu</b>: "+palabra+"</li>"));
    obtenerMemorias();
    var respondio = false;
    for (i in memorias) {
        if (palabra == memorias[i].palabra) {
            Responder(palabra);
            respondio = true;
        }
    }
    if (respondio == false) {
        Aprender(palabra);
    }
}

function Responder(palabra) {
    for (i in memorias) {
        if (palabra == memorias[i].palabra) {
            $(".messages").append($("<li><b>Guier</b>: "+memorias[i].respuestas+"</li>").addClass("answer"));
            efectoAimst(palabra)
        }
    }
}

function Olvidar(palbra) {
    return "olvidé todo.";
}

function Aprender(palabra) {
    memoria = { "palabra": palabra, "respuestas": prompt("¿Que debo decir?") }
    memorias.push(memoria);
    guardarMemorias();
    alert("Palabra aprendida.");
}