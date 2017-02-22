var memoria = {
    "palabra": "",
    "respuestas": []
}

memorias = []

 // Metodo para obtener la palabra del usuario final

function Decir() {
    return $("input").val();
}

function Escuchar() {
    var palabra = Decir();
    var respondio = false;
    $("input").val("");
    if(palabra!=('')){
        obtenerMemorias();
        for (i in memorias) {
            if (palabra == memorias[i].palabra) {
                Responder(palabra);
                respondio = true;
            }
        }
        if(respondio == false) {
            Aprender(palabra);
        }
    }
}

function Responder(palabra) {
    for (i in memorias) {
        if (palabra == memorias[i].palabra) {
            $(".messages").append($("<li><b>Tú</b>: "+palabra+"</li>"));
            $('.messages b').last().addClass("interactionA");
            $(".messages").val('');
            $(".messages").append($("<li><b>Guier:</b> "+memorias[i].respuestas+"</li>").addClass("answer"));
            $('.answer b').last().addClass("interactionB");
            $(".messages").animate({scrollTop: $(".messages").height()}, 1000);
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