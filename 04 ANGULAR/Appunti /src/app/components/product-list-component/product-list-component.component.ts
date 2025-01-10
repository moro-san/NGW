import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {

  prodottiLista = [
    {
      nome: "Pane",
      prezzo: "4,20€/kg"
    },
    {
      nome: "Latte",
      prezzo: "1,60€"

    },
    {
      nome: "Uova",
      prezzo: "2,60€"

    },
    {
      nome: "Pasta",
      prezzo: "1,20€"

    },
  ] 




}
