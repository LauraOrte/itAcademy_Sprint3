const Jugador = require('./jugador');
const Juego = require('./juego');
const Marcador = require('./marcador');


let juego = new Juego();

juego.anyadirjugador(new Jugador("Laura"));
juego.anyadirjugador(new Jugador("Pol"));

//Subir puntos

juego.juegoMarcador.subirPuntos("Laura", 5);
juego.juegoMarcador.subirPuntos("Pol", 7);


// singleton

let nuevoMarcador = new Marcador();
nuevoMarcador.subirPuntos("Laura", 4)

juego.juegoMarcador.mostrarPuntos()
juego.juegoMarcador.ganador()