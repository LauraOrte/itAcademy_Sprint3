const Marcador = require("./marcador");

class Juego {
    constructor(){
        this.jugadores = [];
        this.juegoMarcador = new Marcador();
        
    }

    anyadirjugador(jugador){
        if(jugador.nom == undefined) {
            return console.log(`El jugador '${jugador}' no existe, registralo`);
        } else {
            this.jugadores.push(jugador);
            return console.log(`El jugador '${jugador.nom}' se ha añadido al juego correctamente`);
            
    };

    }

    
}

module.exports = Juego;