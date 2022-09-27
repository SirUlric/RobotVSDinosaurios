import { Robot } from './ClassRobot.js';
import { Dinosaurio } from './ClassDinosaurios.js';

const MAX_LUGARES = 64;
const TABLERO = new Array(8);
const recorrerTablero = (tablero, valor) => {
    for(let x = 0; x < tablero.length; x++) {
        for(let y = 0; y < tablero[x].length; y++) {
            tablero[x][y] = valor;
        }
    }
}

//Creando tablero 8x8
for(let i = 0; i < 8; i++) {
    TABLERO[i] = new Array(8);
};

recorrerTablero(TABLERO, null);

const asignarPosicionNueva = tablero => {
    let pX = 0;
    let pY = tablero[pX].findIndex(y => y === null);
    while(pY === -1 && pX < 8) {
        ++pX;
        pY = tablero[pX].findIndex(y => y === null);
    }
    return [pX, pY];
};

const dinosauriosCreados = tablero => {
    let dinosaurios = 0;
    tablero.forEach((v, pX) => {
        tablero[pX].forEach(pY => {
            if(pY instanceof Dinosaurio) dinosaurios++;
        })
    });
    console.log(`Se crearon ${dinosaurios} dinosaurios`);
    return dinosaurios;
}
const crearRobot = (pX, pY) => {
    //Creando Robot en el tablero
    //El usuario elige donde crear el robot en el tablero
    pX = parseInt(pX);
    //Si los valores ingresados estan fuera de rango, se asignara una posicion por defecto
    if(pX > 7 || pX < 0) { 
        pX = 0;
    }
    pY = parseInt(pY);
    if(pY > 7 || pY < 0) {
        pY = 0;
    }
    //Si el lugar esta ocupado se asignara la primer posicion vacia
    if(TABLERO[pX][pY] !== null) {
        let posicionesNuevas = asignarPosicionNueva(TABLERO);
        let pNX = posicionesNuevas[0]; //Posicion nueva X
        let pNY = posicionesNuevas[1]; //Posicion nueva Y
        return TABLERO[pNX][pNY] = new Robot(pNX, pNY);
    }
    TABLERO[pX][pY] = new Robot(pX, pY);
    
};

const seleccionarUnidad = tablero => {
    let r;
    tablero.forEach((v, x) => {
        tablero[x].forEach((v, y) => {
            if(tablero[x][y] instanceof Robot) return r = tablero[x][y];
        })
    });
    return r;
}

const moverRobotX = pX => {
    if(pX === 0) return console.log(`Se debe ingresar un valor distinto de 0`);
    let r = seleccionarUnidad(TABLERO);
    if(r.getPosicionX + pX < 0 || r.getPosicionX + pX > 7) return console.log(`Lugar fuera de rango`);
    let {posicionX, posicionY} = r;
    TABLERO[posicionX][posicionY].moverPX(pX, TABLERO);
};

const moverRobotY = pY => {
    if(pY === 0) return console.log(`Se debe ingresar un valor distinto de 0`);
    let r = seleccionarUnidad(TABLERO);
    if(r.getPosicionY + pY < 0 || r.getPosicionY + pY > 7) return console.log(`Lugar fuera de rango`);
    let {posicionX, posicionY} = r;
    TABLERO[posicionX][posicionY].moverPY(pY, TABLERO);
};



//Creando Dinosaurios en posiciones aleatorias sobre el tablero
(function() {
        let cantidadDinosaurios = Math.round(Math.random() * (60 - 1) + 1);
        if(cantidadDinosaurios >= MAX_LUGARES) cantidadDinosaurios--;
        for(let i = 1; i <= cantidadDinosaurios; i++) {
            let nuevoDinosaurio = new Dinosaurio();
            //Obteniendo posiciones para asignar en el tablero
            let pX = nuevoDinosaurio.getPosicionX; //Guardando posicion en variable
            let pY = nuevoDinosaurio.getPosicionY; //Guardando posicion en variable
            //Si el lugar esta ocupado, se asigna la primera posicion vacia
            if(TABLERO[pX][pY] !== null) {
                let posicionesNuevas = asignarPosicionNueva(TABLERO);
                let pNX = posicionesNuevas[0]; //Posicion nueva X
                let pNY = posicionesNuevas[1]; //Posicion nueva Y
                nuevoDinosaurio.setPosicionX = pNX; //Se asigna posicion nueva 
                nuevoDinosaurio.setPosicionY = pNY; //Se asigna posicion nueva
                TABLERO[pNX][pNY] = nuevoDinosaurio;
            }
            TABLERO[pX][pY] = nuevoDinosaurio;
        }
    }
)();

const verTablero = () => console.table(TABLERO);


crearRobot(4, 2);
verTablero();
moverRobotX(0)
verTablero();
console.log(seleccionarUnidad(TABLERO));
