"use strict";
let redactor = {
    nombre: "Latita",
    tecnologias: ['HTML', 'CSS', 'Javascript'],
    tomarMate: false
};
let redactor2 = {
    nombre: "Tito",
    tecnologias: ['HTML', 'CSS', 'Javascript'],
    tomarMate: null,
    apellido: 'Buenardito',
    recibido: false
};
function enviarCV(redactor) {
    console.log(`Este es el CV de ${redactor.nombre}.`);
}
enviarCV(redactor);
