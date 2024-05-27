interface RedactorDeBugs {
    nombre : string | undefined,
    tecnologias: string[],
    tomarMate? : boolean | null
}

let redactor: RedactorDeBugs = {
    nombre: "Latita",
    tecnologias: ['HTML', 'CSS', 'Javascript'],
    tomarMate: false
}

let redactor2 = {
    nombre: "Tito",
    tecnologias: ['HTML', 'CSS', 'Javascript'],
    tomarMate:null,
    apellido: 'Buenardito',
    recibido: false
}

function enviarCV(redactor : RedactorDeBugs) {
    console.log(`Este es el CV de ${redactor.nombre}.`);
}

enviarCV(redactor);