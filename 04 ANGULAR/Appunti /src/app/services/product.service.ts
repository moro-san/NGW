import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // step1. importare http client module nell'app.module.ts
  // step2. nel constructor del servizio importanre http:HttpClient per permette 
              // al servizio di eggettuare HTTP Request
  // step3. creare funzione di logica che si vuole richiedere

  
  constructor(private http:HttpClient) { }

  getAllProduct(): Observable<{ drinks: IProduct[] }> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'

    return this.http.get<{ drinks: IProduct[] }>(url)
  }
}
