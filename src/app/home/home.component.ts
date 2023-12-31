import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {Router, RouterModule } from '@angular/router';
import { ControladorDeSessoes } from '../utils/controlador-de-sessoes';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatButtonModule, FormsModule, ReactiveFormsModule,
            MatToolbarModule, MatDividerModule,MatListModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private _formBuilder: FormBuilder,private router:Router) { }
  showFiller = false;
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  sair(){
    ControladorDeSessoes.limparDadosLocaisUsuario()
    this.router.navigate(['/login'])
  }
}
