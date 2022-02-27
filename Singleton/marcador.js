let instance = null;

class Marcador {

  constructor(){
    this.marcador = []
    if (!instance) {
      instance = this;
  }

    return instance;
}

  subirPuntos(jugador, puntosMas){
    if(jugador.nom === undefined) {
        return console.log(`El jugador '${jugador}' no existe, registralo`);
    } else {
      let jugadorMarcador = this.marcador.findIndex(obj => name === obj.name);
      this.marcador[jugadorMarcador].points += puntosMas
    }

};

quitarPuntos(jugador, puntosMenos){
    if(jugador.nom === undefined) {
        return console.log(`El jugador '${jugador}' no existe, registralo`);
    } else {
      return this.marcador.sort((a, b) => b.points - a.points);

    }
};

mostrarPuntos(jugador){
  console.log("Marcador: ",
  this.marcador.sort())
}

ganador(){
  console.log(`El ganador es: ${this.marcador.sort()[0].nom}!!`)
  }



}

module.exports = Marcador;