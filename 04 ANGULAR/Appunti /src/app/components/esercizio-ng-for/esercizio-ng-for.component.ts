import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio-ng-for',
  templateUrl: './esercizio-ng-for.component.html',
  styleUrls: ['./esercizio-ng-for.component.css']
})
export class EsercizioNgForComponent {

  //Utente
  ruolo : string [] = ['Admin', 'Utente', 'Ospite'];
  ruoloSelezionato : string = '';

  //STATUS 
  status : string = 'attivo';

  //ARRAY PAESI
  paesi : string []= ['Italia', 'Francia', 'Germania', 'Spagna', 'Portogallo', 'Grecia'];
  selezionaPaese: string = '';

  //ARRAY DI OGGETTI 
  utenti = [
  { 
    nome: 'Luca',
    eta: 25,
  },
  { 
    nome: 'Giulia',
    eta: 30,
  },
  { 
    nome: 'Sara',
    eta: 28,
  },
  { 
    nome: 'Alessandro',
    eta: 33,
  },
  { 
    nome: 'Lisa',
    eta: 29,
  },
  { 
    nome: 'Marta',
    eta: 24,
  },
  { 
    nome: 'Michele',
    eta: 28,
  },
]

}
