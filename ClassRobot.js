import { Dinosaurio } from "./ClassDinosaurios.js";

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
export class Robot {
    constructor(posicionX, posicionY) {
        this.movimientosR = 0; //Movimientos Realizados
        this.golpesRec = 0; //Golpes Recibidos
        this.posicionX = posicionX;
        this.posicionY = posicionY;
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

    
    moverPX(cantidadCasilleros, TABLERO) {
        if(isNaN(cantidadCasilleros)) return console.log(`Se debe ingresar un valor numerico`);
        if(cantidadCasilleros === 0) return console.log(`Se debe ingresar un valor distinto de 0`);
        if(cantidadCasilleros < -2 || cantidadCasilleros > 2) cantidadCasilleros = 2;
        let pXV = this.getPosicionX;
        let pY = this.getPosicionY;
        let pX = this.getPosicionX + cantidadCasilleros;
        if(pX < 0 || pX > 7) return console.log(`Lugar fuera de rango`);
        if(this.getMovimientosR >= 2) return console.log(`Se supera la cantidad de movimientos por turno`);
        if(TABLERO[pX][pY] instanceof Dinosaurio) return console.log(`Lugar ocupado por un Dinosaurio. [X: ${pX}][Y: ${pY}]`);
        if(this.movimientosR + Math.abs(cantidadCasilleros) > 2) return console.log(`Solo se permiten 2 acciones por turno`);
        this.setMovimientosR = this.movimientosR + Math.abs(cantidadCasilleros);
        TABLERO[pX][pY] = this;
        TABLERO[pX][pY].setPosicionX = pX;
        TABLERO[pXV][pY] = null;
    }
    moverPY(cantidadCasilleros, TABLERO) {
        if(isNaN(cantidadCasilleros)) return console.log(`Se debe ingresar un valor numerico`);
        if(cantidadCasilleros === 0) return console.log(`Se debe ingresar un valor distinto de 0`);
        if(cantidadCasilleros < -2 || cantidadCasilleros > 2) cantidadCasilleros = 2;
        let pYV = this.getPosicionY;
        let pX = this.getPosicionX;
        let pY = this.getPosicionY + cantidadCasilleros;
        if(pY < 0 || pY > 7) return console.log(`Lugar fuera de rango`);
        if(this.movimientosR >= 2) return console.log(`Se supera la cantidad de movimientos por turno`);
        if(TABLERO[pX][pY] instanceof Dinosaurio) return console.log(`Lugar ocupado por un Dinosaurio. [X: ${pX}][Y: ${pY}]`);
        if(this.movimientosR + Math.abs(cantidadCasilleros) > 2) return console.log(`Solo se permiten 2 acciones por turno`);
        this.setMovimientosR = this.movimientosR + Math.abs(cantidadCasilleros);
        TABLERO[pX][pY] = this;
        TABLERO[pX][pY].setPosicionY = pY;
        if(TABLERO[pX][pYV] instanceof Robot) TABLERO[pX][pYV] = null;
    }
}