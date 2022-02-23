const Jugador = require('./jugador');
const Juego = require('./juego');
const Marcador = require('./marcador');

//Crear jugadores

let jugador = new Jugador();

let jugador1 = jugador.crearJugador(`Laura`);
console.log(jugador1);

let jugador2 = jugador.crearJugador(`Marc`);
console.log(jugador2);

//Añadir puntos

let juego = new Juego();

let juego1 = juego.anyadirjugador(jugador1);


let juego2 = juego.anyadirjugador(jugador2);


//Subir puntos

juego.juegoMarcador.subirPuntos(jugador1, 5);
juego.juegoMarcador.subirPuntos(jugador2, 7);

//Quitar puntos

juego.juegoMarcador.quitarPuntos(jugador1, 2);
juego.juegoMarcador.quitarPuntos(jugador2, 2);

//Total Puntos

juego.juegoMarcador.mostrarPuntos(jugador1);
juego.juegoMarcador.mostrarPuntos(jugador2);

//Ganador

juego.juegoMarcador.ganador();

// singleton

let marcadornuevo = new Marcador();

marcadornuevo.subirPuntos(jugador1, 9);
juego.juegoMarcador.mostrarPuntos(jugador1);
