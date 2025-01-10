import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.css']
})
export class ProductServicesComponent implements OnInit{
  //DTO = Data Transfer Object
  constructor(private productDTO: ProductService, 
    private router:Router
  ) {}

  drink: IProduct[]=[];
 

  ngOnInit(): void {
    this.productDTO.getAllProduct().subscribe({
      next:(res: {drinks:IProduct[]})=>{
        this.drink = res.drinks;
        console.log(this.drink);
      }, error:(err) => {
        console.error(err);
      },
      
    });

  }
  goToUser(name:string){
    this.router.navigate(['/user-list', name])

  }
}
