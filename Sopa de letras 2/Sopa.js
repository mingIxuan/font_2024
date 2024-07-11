var palabras = ["banana", "uva","manzana", "pera", "frutilla", "limon", "arandanos"];

var sopaLetras = wordfindgame.create(palabras, '#contenedor', '#palabras/sopadeletras');

$("#BTNresolver").clik(function(){
    var resultado = wordfindgame.solve(sopaLetras, palabras);
    console.log(resultado)
});

$("#BTNrefresh").clik(function(){
    window.location.href = window.location.href;
});