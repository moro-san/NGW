import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Output() datiInviati: EventEmitter<string> = new EventEmitter<string>();

  inviaDati() {
    const nome = "Marco";
    const frase = `Ciao ${nome}, questo è il child`;
    this.datiInviati.emit(frase); // l'evento che emette i dati del CHILD
  }
}
