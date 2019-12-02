export class Wydatek {

    constructor(
        public kategoria: string,
        public kwota: number,
        public opis: string,
        public data: Date,
        public ileKm: string ,
        public ileLitrow: string) {
    }
}
export const KATEGORIE = [ 'Tankowanie', 'Myjnia', 'Serwis', 'Inne', 'Wydatki' ];