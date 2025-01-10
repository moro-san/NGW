import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //variabile per template driven form 
    utente = {
      name: '',
      email: '',
      password: '',
      number: ''
    };

  //variabile per Reactive Form 
  myForm = new FormGroup({
      name: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl ('', [Validators.email, Validators.required]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
      numero: new FormControl ('', [Validators.required])
  });

  //funzione invio per i reactive
  sendData (){
    if(this.myForm.valid){
      console.log(this.myForm.value)
    } else {
      console.error("il form non è valido")
    }
  }
  



  //inviaDati(form:NgForm) {
   // if (form.valid){
   //   console.log(this.utente)
  //  } else {
   //   console.log('il form non è valido')
   // };
 // }
}
