import { Injectable } from '@angular/core';
import { Rotina, RotinaDTO } from '../Interfaces/Rotina';
import { localBaseApi } from '../localBaseApi';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RotinaService {

  constructor(private http: HttpClient) { }

  
  private criarUrl():string{
    return `${localBaseApi}/api/Rotina/Criar`
  }
  private urlParaObterTodos():string{
    return `${localBaseApi}/api/Rotina/obter-todos`
  }
  criarRotina(rotina:Rotina):Observable<Rotina>{
    console.log(rotina)
    return this.http.post<Rotina>(this.criarUrl(),rotina);
  }
  obterTodos():Observable<Array<RotinaDTO>>{
    return this.http.get<Array<RotinaDTO>>(this.urlParaObterTodos())
  }
}
