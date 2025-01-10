import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser(page: number, per_page: number):Observable<{data: IUser[]}> {
    const url= `https://reqres.in/api/users?page=${page}&per_page=${per_page}`;
    return this.http.get<{data:IUser[]}>(url);
  }
}
