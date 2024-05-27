"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(numero) {
        this.ticket = numero;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}.`;
    }
}
let sorteo = new Sorteo('Latita');
sorteo.setTicket('S7');
console.log(sorteo.sortear());
