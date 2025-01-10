import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail-component',
  templateUrl: './product-detail-component.component.html',
  styleUrls: ['./product-detail-component.component.css']
})
export class ProductDetailComponentComponent {

  @Input() prodotto: any;
  

  
}
