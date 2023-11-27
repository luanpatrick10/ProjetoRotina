import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginService } from './login.service';
import { Login } from '../Interfaces/interfaces';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  constructor(private service: LoginService,private router:Router) { }
  teste: string = "";
  login: Login = {
    email: "",
    senha: ""
  };
  public logar() {
    this.service.logar(this.login.email,this.login.senha).subscribe((resposta) => {
      if(resposta)        
        this.router.navigate(['home'])
      else
      console.log("E-mail ou senha errada.")
    })
  };
}
