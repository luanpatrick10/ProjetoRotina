import { CanMatchFn, Router } from '@angular/router';
import { ControladorDeSessoes } from '../utils/controlador-de-sessoes';
import { inject } from '@angular/core';


export const canMatchGuard: CanMatchFn = (route, segments) => {
  let permissoes = ControladorDeSessoes.obterUsuario()
  console.log(permissoes)
  if (typeof permissoes === 'undefined' && route.path == 'login')
    return true
  else if (typeof permissoes === 'undefined' && route.path != 'login' && route.path != 'cadastro-de-usuario'){    
    let router = inject(Router)
    router.navigate([''])
  }    
  else if (typeof permissoes !== 'undefined') {
    if (!permissoes.logado) {
      inject(Router).navigate(['/login'])
    }
    if (permissoes.logado && route.path == 'login') {
      inject(Router).navigate(['/admin/rotina'])
    }
    if (permissoes.logado && route.path == 'cadastro-de-usuario') {
      inject(Router).navigate(['/admin/rotina'])
    }
  }
  return true;
};
