let instance = null;

class Marcador {

  constructor(){
    this.marcador = []
    if (!instance) {
      instance = this;
  }

    return instance;
}

  subirPuntos(Jugador, puntosMas){
   
      let jugadorMarcadorIndex = this.marcador.findIndex(obj => Jugador === obj.Jugador);
      this.marcador[jugadorMarcadorIndex].points += puntosMas
    }



quitarPuntos(){
 
      return this.sort((a, b) => b.points - a.points);

    }

ganador(){
  console.log(`El ganador es: ${this.marcador.sort()[0].Jugador}!!`)
  }

mostrarPuntos(){
  console.log("marcador: ",
  this.marcador.sort())
}



}

module.exports = Marcador;