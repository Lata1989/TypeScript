class Pelicula{
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} está siendo proyectada.`);
    }

    constructor(name: string, characters: string[], cast: string[]){
        this.nombre = name;
        this.protagonistas = characters;
        this.actores = cast;
    }
}

const pelicula = new Pelicula('Bettlejuice', ['Beetlejuice','Lydia Deetz'],['Michael Keaton','Winona Ryder']);
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer','Lewis Strauss'],['Cillian Murphy','Robert Downey Jr.']);

pelicula.proyectarEnCine();
pelicula2.proyectarEnCine();