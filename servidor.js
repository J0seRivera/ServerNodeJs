var cafecito = require("express");
var aplicacion = cafecito();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);
aplicacion.get("/richar", caca);

function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong>home</strong> genial!!");
}

function cursos(peticion, resultado)
{
  resultado.send("Estos son los <strong>cursos</strong>");
}
function caca(peticion, resultado)
{
    resultado.send("Richar Chan <strong>putito<strong/>");
}

aplicacion.listen(8989);

// platzi.com/js