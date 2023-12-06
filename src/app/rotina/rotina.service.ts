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


  private criarUrl(): string {
    return `${localBaseApi}/api/Rotina/Criar`
  }

  private urlParaObterTodos(): string {
    return `${localBaseApi}/api/Rotina/obter-todos`
  }

  private urlParaObterRotinaDoUsuario(id: number): string {
    return `${localBaseApi}/api/Rotina/obter-por-id/${id}`
  }

  private urlParaRemoverRotina(id: number): string {
    return `${localBaseApi}/api/Rotina/excluir/${id}`
  }
  
  criarRotina(rotina: Rotina): Observable<Rotina> {
    return this.http.post<Rotina>(this.criarUrl(), rotina);
  }

  public obterRotinaDoUsuario(id: number): Observable<Array<RotinaDTO>> {
    return this.http.get<Array<RotinaDTO>>(this.urlParaObterRotinaDoUsuario(id))
  }

  obterTodos(): Observable<Array<RotinaDTO>> {
    return this.http.get<Array<RotinaDTO>>(this.urlParaObterTodos())
  }

  public removerRotina(id:number): Observable<boolean>{
    return this.http.delete<boolean>(this.urlParaRemoverRotina(id))
  }
  public rotinaFeita(id:number): Observable<void>{
    return this.http.delete<void>(this.urlParaRemoverRotina(id))
  }
}