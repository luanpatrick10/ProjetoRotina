import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 localBaseAPI: string = "http://localhost:5092"

 private CriarUrlLogar(email: string, senha:string) : string {
  let local:string = `${this.localBaseAPI}/api/Usuario/logar/${email}/${senha}`
  console.log(local)
  return local
 } 

  constructor(private http: HttpClient) { }
  logar(email:string, senha:string): Observable<Login>{
    return this.http.post<Login>(this.CriarUrlLogar(email,senha),null)
  }

}
