class Jugador {
    constructor (nom){
        this.nom = nom;
    
    }

    crearJugador(nom){
        return new Jugador(nom);
    }

}

module.exports = Jugador;