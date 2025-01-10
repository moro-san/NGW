import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  constructor(private userDTO:UserService, 
    private router:ActivatedRoute
  ){}

  userList: IUser[]=[];
  NameFromCocktails: any;
  ngOnInit(): void {
    const name = this.router.snapshot.paramMap.get('name')
    this.NameFromCocktails = name;
    console.log(name);
    this.userDTO.getAllUser(1,10).subscribe ({
      next: (res: { data:IUser[] }) =>{
        this.userList = res.data;
        console.log(res.data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
