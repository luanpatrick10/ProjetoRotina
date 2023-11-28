import { TestBed } from '@angular/core/testing';

import { CadastroDeUsuarioService } from './cadastro-de-usuario.service';

describe('CadastroDeUsuarioService', () => {
  let service: CadastroDeUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroDeUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
