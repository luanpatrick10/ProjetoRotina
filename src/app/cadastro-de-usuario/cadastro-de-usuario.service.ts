import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroDeUsuarioService {
  localBaseAPI: string = "http://localhost:5092"

  constructor(private http: HttpClient) { }

  criarUrlLogar(): string {
    return `${this.localBaseAPI}/api/Usuario/registrar`
  }
  registrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.criarUrlLogar(), usuario)
  }
}