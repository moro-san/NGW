import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio-ng-if',
  templateUrl: './esercizio-ng-if.component.html',
  styleUrls: ['./esercizio-ng-if.component.css']
})
export class EsercizioNgIfComponent {
  isVisibile: boolean = true;
  isCaricamento: boolean = false;

  Visibilita(){
    this.isVisibile = false;
    this.isCaricamento = true;

    setTimeout(() => { 
      this.isCaricamento = false;   
    }, 2000);
  }

  
}


