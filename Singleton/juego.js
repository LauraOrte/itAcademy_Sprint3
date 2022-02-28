const Jugador = require("./jugador");
const Marcador = require("./marcador");

class Juego {
    constructor(){
        this.jugadores = [];
        this.juegoMarcador = new Marcador();
        
    }

    anyadirjugador(Jugador){
        if (this.juegoMarcador.marcador.some(e => e.nom === Jugador.nom)) {
            console.log(`${Jugador.nom} ya está en el juego!`)
        } else {
        this.juegoMarcador.marcador.push({ Jugador: Jugador.nom, points: 0 })
            return console.log(`El jugador '${Jugador.nom}' se ha añadido al juego correctamente`);
        }
            
    };

    
}

module.exports = Juego;