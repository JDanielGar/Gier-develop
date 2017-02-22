$("input").click(function(){
    $("#text-button").click(function(){
        Escuchar()
    });
    $("input").keypress(function(e) {
        if(e.which == 13) {
            Escuchar();
        }
    });
});
$(".activarEm").click(function(){
	estabilizadorOn();
});
$(".desactivarEm").click(function(){
	estabilizadorOff();
});
$(".estabilizador").click(function(){
	estabilizadorEm();
});