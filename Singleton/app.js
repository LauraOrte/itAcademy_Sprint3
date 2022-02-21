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
console.log(juego1);

let juego2 = juego.anyadirjugador(jugador2);
console.log(juego2);

//Subir puntos

console.log(juego.subirPuntos(jugador1, 5));
console.log(juego.subirPuntos(jugador2, 7));

//Quitar puntos

console.log(juego.quitarPuntos(jugador1, 2));
console.log(juego.quitarPuntos(jugador2, 5));

//Total Puntos

console.log(juego.mostrarPuntos(jugador1));


//Marcador con Singleton

const jugadors = (jugador1.puntosTotal.concat(jugador2.puntosTotal));

Marcador.ganador(jugadors);
Marcador.ganador(jugadors);

