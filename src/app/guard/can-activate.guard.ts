import { CanActivateFn } from '@angular/router';
import { ControladorDeSessoes } from '../utils/controlador-de-sessoes';

export const canActivateGuard: CanActivateFn = (route, state) => {  
  return true;  
};
