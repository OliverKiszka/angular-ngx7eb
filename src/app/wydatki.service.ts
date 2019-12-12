import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';

@Injectable()
export class WydatkiService {
  

  private wydatki: Wydatek[];

  constructor() { 
    this.wydatki = [
        new Wydatek('Tankowanie', 252.43, '', new Date(2018, 4, 30)),
        new Wydatek('Myjnia', 75, '', new Date(2018, 4, 2)),
        new Wydatek('Serwis', 1250, 'Klocki, rozrząd i parę drobiazgów', new Date(2018, 3, 16)),
        new Wydatek('Inne', 315.50, 'Różowe futerko na kierownicę', new Date(2018, 3, 16)),
        new Wydatek('Tankowanie', 300, 'Litry oraz kilometry', new Date(2017, 7, 12), 300, 20),
        new Wydatek('Tankowanie', 338.46, 'Tylko kilometry, "null" litrów ', new Date(2017, 5, 10), 15, null),
        new Wydatek('Tankowanie', 276.34, 'Tylko litry, "null" kilometrów', new Date(2017, 8, 30),null, 30)
    ];
  }
  getWydatki() {
    return this.wydatki;
  }

}