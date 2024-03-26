import { Component, OnInit,NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators, NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

public loginForm: FormGroup = new FormGroup({

  correo: new FormControl(null, [
    Validators.required,
    Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$"),
    Validators.minLength(3),
    Validators.maxLength(20)]),
  contrasena: new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(25)]),
});

public errorMessages = {
  'correo': [
    { type: 'required', message: 'El campo es requerido.' },
    { type: 'pattern', message: 'solo se permite formato: alguien@gmail.com' },
    { type: 'minlength', message: 'Minimo es de 3 caracteres.' },
    { type: 'maxlength', message: 'Maximo es de 15 caracteres.' },
  ],
  'contrasena': [
    { type: 'required', message: 'El campo es requerido.' },
    { type: 'pattern', message: '' },
    { type: 'minlength', message: 'Minimo es de 5 caracteres.' },
    { type: 'maxlength', message: 'Maximo es de 25 caracteres.' },
  ]
};




ngOnInit(): void {
    
}

submit(){}

  







}
