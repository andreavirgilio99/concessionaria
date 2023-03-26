import { Injectable } from "@angular/core";
import { Vendita } from "../model/vendita.model";

@Injectable({
    providedIn: 'root'
  })
  export class VenditeService {
   
    listaVendite: Vendita[] = [];

    constructor(){
        this.listaVendite =  this.getListaVendite()
    }

    getListaVendite(): Vendita[]{
        return [{
            id: 1,
            dataVendita: new Date('November 28, 2022'),
            fkVeicolo: 3,
            importo: 3700,
            note: 'Sconto per fanalino danneggiato'
        }]
    }
  }