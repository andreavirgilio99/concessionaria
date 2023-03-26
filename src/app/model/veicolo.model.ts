import { StatoVeicolo } from "./stati.veicoli.enum";

export interface Veicolo{
    id: number;
    marca: string;
    modello: string;
    anno: number;
    targa: string;
    dataArrivo: Date;
    descrizione: string;
    foto: string[];
    prezzo: number
    stato: StatoVeicolo
}