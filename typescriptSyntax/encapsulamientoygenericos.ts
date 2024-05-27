class Sorteo<T>{ // <T> es un generico
    private ticket? : T;

    constructor(private nombre: string){

    }

    setTicket(numero: T){
        this.ticket = numero;
    }

    getTicket() {
        return this.ticket;
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}.`
    }
}

let sorteo = new Sorteo<string>('Latita');
sorteo.setTicket('S7');

console.log(sorteo.sortear());