import { Robot } from './ClassRobot.js';
import { Dinosaurio } from './ClassDinosaurios.js';

const MAX_LUGARES = 64;
const TABLERO = [];

//Creando tablero 16x16
(function() {
    for(let i = 0; i < MAX_LUGARES; i++) {
        TABLERO[i] = undefined;
    }
})();

//Creando Dinosaurios en posiciones aleatorias sobre el tablero
(function() {
        let cantidadDinosaurios = Math.round(Math.random() * (3 - 1) + 1);
        console.log(cantidadDinosaurios);
        for(let i = 1; i <= cantidadDinosaurios; i++) {
            let nuevoDinosaurio = new Dinosaurio();
            let posicionXY = nuevoDinosaurio.getPosicionX * nuevoDinosaurio.getPosicionY;
            if(TABLERO[posicionXY] !== undefined) { //Asignando nueva posicion
                let ultimoLugar = TABLERO.findLastIndex(lugar => lugar === undefined);
                let nuevaPosicionX = ultimoLugar => {
                    let x = 2;
                    while(ultimoLugar % x !== 0) x++;
                    return x;
                };
                let nuevaPosicionY = ultimoLugar => {
                    let y = 8;
                    while(ultimoLugar % y !== 0) y--;
                    return y;
                }
                TABLERO[ultimoLugar] = nuevoDinosaurio;
                TABLERO[ultimoLugar].posicionX = nuevaPosicionX(ultimoLugar);
                TABLERO[ultimoLugar].getPosicionY = nuevaPosicionY(ultimoLugar);
            }
            TABLERO[posicionXY] = nuevoDinosaurio;
        }
    }
)();

//Creando Robot en el tablero
(function() {
    let posicionX = prompt('POSICION "X"\nIngresa un numero entre 0 y 8');
    let posicionY = prompt('POSICION "Y"\n Ingresa un numero entre 0 y 8');
    posicionX = parseInt(posicionX);
    if(posicionX > 8 || posicionX < 0) { 
        posicionX = 0;
    }
    posicionY = parseInt(posicionY);
    if(posicionY > 8 || posicionY < 0) {
        posicionY = 0;
    }
    if(TABLERO[posicionX * posicionY] !== undefined) {
        let ultimoLugar = TABLERO.findLastIndex(lugar => lugar === undefined);
        let nuevaPosicionX = ultimoLugar => {
            let x = 2;
            while(ultimoLugar % x !== 0) x++;
            return x;
        };
        let nuevaPosicionY = ultimoLugar => {
            let y = 8;
            while(ultimoLugar % y !== 0) y--;
            return y;
        }
        TABLERO[ultimoLugar] = new Robot(nuevaPosicionX(ultimoLugar), nuevaPosicionY(ultimoLugar));
    }
    TABLERO[posicionX * posicionY] = new Robot(posicionX, posicionY);
})();



console.table(TABLERO);
/* TABLERO.forEach(x => console.log(x instanceof Dinosaurio))
TABLERO.forEach(x => console.log(x instanceof Robot)) */
