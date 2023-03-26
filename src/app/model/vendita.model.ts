export interface Vendita{
    id: number;
    fkVeicolo: number;
    dataVendita: Date;
    importo: number;
    note: string;
}