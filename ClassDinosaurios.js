/* Robot contra dinosaurios.
El un tablero de 16x16 el sistema podrá generar n cantidad de dinosaurios.
los dinosaurios se pueden mover en la cuadricula o atacar de manera aleatoria,
 pero solo se podrán mover a espacios no ocupados por otros elementos.
 El jugador podrá crear un robot y elegir en que parte de la cuadricula va nacer,
  podrá atacar con 2 ataques y moverse pero solo tendrá 2 movimientos por turno.
Ejemplo el usuario puede moverse 2 casilleros pero ya no podrá atacar,
 pero si podía moverse 1 casilla y luego atacar o primero atacar luego moverse.
Tampoco puede moverse a ningún casillero que esté ocupado.
Elemento tiene su propio turno para hacer cosas.
La representación de todo esto tendrá que ser por consola.
Datos los dinosaurios de mueren con 2 golpes el robot se muere a los 5 golpes.
Extra te animas a representar en la consola toda la cuadricula por cada turno? */
export class Dinosaurio {
    constructor() {
        this.movimientosR = 0; //Movimientos realizados
        this.golpesRec = 0; //Golpes recibidos
        this.posicionX = Math.round(Math.random() * 7);
        this.posicionY = Math.round(Math.random() * 7);
    }

    get getMovimientosR() {
        return this.movimientosR;
    }
    get getGolpesRec() {
        return this.golpesRec;
    }
    get getPosicionX() {
        return this.posicionX;
    }
    get getPosicionY() {
        return this.posicionY;
    }
    get getIdentificador() {
        return this.identificador;
    }

    set setPosicionX(posicion) {
        this.posicionX = posicion;
    }
    set setPosicionY(posicion) {
        this.posicionY = posicion;
    }
    
    set setMovimientosR(movimientos) {
        this.movimientosR = movimientos;
    }
    set setIdentificador(numero) {
        this.identificador = numero;
    }

    moverse(dirX = 0, dirY = 0) {
        if(!dirX || !dirY) return console.error('Se debe ingresar un valor numero entre -2 y 2');
        if(dirX + dirY > 2) return console.error('Solo pueden ser 2 acciones en total');
        this.posicionX += dirX;
        this.posicionY += dirY;
    };
}