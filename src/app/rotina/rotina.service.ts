import { Injectable } from '@angular/core';
import { Rotina } from '../Interfaces/Rotina';
import { localBaseApi } from '../localBaseApi';

@Injectable({
  providedIn: 'root'
})
export class RotinaService {

  constructor() { }

  rotina:Rotina = {
    diasDaSemana: '',
    nomeDaRotina:''
  }
  criarUrl():string{
    return `${localBaseApi}/Rotina/Criar`
  }
  criarRotina(){
  }
}
