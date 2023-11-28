import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,

  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CadastroDeUsuarioService } from './cadastro-de-usuario.service';
import { Usuario } from '../Interfaces/Usuario';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-cadastro-de-usuario',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, FormsModule, MatIconModule, MatDividerModule,
    MatButtonModule, MatDatepickerModule, MatNativeDateModule, RouterModule,ReactiveFormsModule],
  templateUrl: './cadastro-de-usuario.component.html',
  styleUrl: './cadastro-de-usuario.component.css'
})
export class CadastroDeUsuarioComponent  {
  constructor(private usuarioService:CadastroDeUsuarioService){

  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  hide = true;
  usuario: Usuario = {
    cpf: '',
    nome: '',
    email: '',
    id: 0,
    dataDeNascimento: '',
    senha: '',
    sexo: ''
  };

  public registrar() {
    this.usuarioService.registrar(this.usuario).subscribe(
      res => {console.log("Feito")}
    )
  }
}
