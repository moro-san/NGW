class Veicolo {
    marca:string;
    modello:string;
    velMax: number;
    readonly targa:string;

    constructor (marca: string, modello: string, velMax: number, targa: string) {
    this.marca = marca;
    this.modello = modello;
    this.velMax= velMax;
    this.targa = targa;
    }

    descrizione (): string {
        return `L'autoveicolo marca ${this.marca} modello ${this.modello} raggiunge velocità massima ${this.velMax} km/h. Targata ${this.targa}`;
    }
}

class Auto extends Veicolo {
    numeroPorte: number;

    constructor (marca: string, modello: string, velMax: number, targa: string, numeroPorte:number) {
        super (marca, modello, velMax, targa);
        this.numeroPorte = numeroPorte;
    }

    descrizione (): string {
        return `${super.descrizione()}. Numero porte: ${this.numeroPorte}`;
    }

}

class Moto extends Veicolo {
    tipoManubrio: string;

    constructor (marca: string, modello: string, velMax: number, targa: string,  tipoManubrio: string) {
        super (marca, modello, velMax, targa);
        this.tipoManubrio = tipoManubrio;
    }

    descrizione(): string {
        return `${super.descrizione()}. Tipo manubrio: ${this.tipoManubrio}`;
    }
}

const auto = new Auto ("Fiat Lancia", "Ypsilon", 140, "FE235KG", 5 );
const moto = new Moto ("Kymko", "Agility", 100, "CA564BR", "sportivo");

console.log(auto.descrizione());
console.log(moto.descrizione());