// console.log('Hola mundo en Typescript.');
// console.log('Baldur');
// console.log('Modo observador funcionando correctamente.');
// console.log('Tipo de datos primitivos:');
// console.log('String \n Number \n Boolean \n Undefined \n Null');
// console.log('Compuestos o estructurados:');
// console.log('Object \n Array \n Enum \n Function')
// console.log('Definidos por el usuario:');
// console.log('Class \n Interface \n Type');

// Boolean

let estudiasteJavascript: boolean = true;

if (estudiasteJavascript) {
    console.log('Puedes seguir estudiando Typescript.');
} else {
    console.log('Debes aprender Javascript primero.');
}

// Number

let cjTalleres: number | null | undefined = 11;
let cjBelgrano: number = 11;

jugar(cjTalleres, cjBelgrano);

function jugar(equipo1: number, equipo2: number): void {
    if (equipo1 > equipo2) {
        console.log(`Gana ${equipo1}.`);
    } else if (equipo1 == equipo2) {
        console.log(`Empatan el ${equipo1} y el ${equipo2}.`);
    } else {
        console.log(`Gana ${equipo2}.`);
    }
}

let palabras: string = 'Me emociona verlo a Messi.';

