import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginService } from './login.service';
import { Login } from '../Interfaces/Login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ControladorDeSessoes } from '../utils/controlador-de-sessoes';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule
    , MatCheckboxModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  constructor(private service: LoginService, private router: Router) { }
  teste: string = "";
  login: Login = {
    email: "",
    senha: ""
  };
  public logar() {
    this.service.logar(this.login.email, this.login.senha).subscribe((resposta) => {
      if (resposta) {
        console.log("Senha correta")
        console.log(resposta)
        ControladorDeSessoes.salvarUsuario(resposta)
        this.router.navigate(['admin'])
      }
      else {
        console.log("E-mail ou senha errada.")
      }
    })
  };
}
