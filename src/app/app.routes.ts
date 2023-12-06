import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroDeUsuarioComponent } from './cadastro-de-usuario/cadastro-de-usuario.component';
import { RotinaComponent } from './rotina/rotina.component';
import { canMatchGuard } from './guard/can-match.guard';
import { canActivateGuard } from './guard/can-activate.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full', canMatch: [canMatchGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro-de-usuario', component: CadastroDeUsuarioComponent, canMatch: [canMatchGuard] },
    {
        path: 'admin',
        component: HomeComponent,
        children: [
            { path: 'rotina', component: RotinaComponent }
        ],
        canMatch: [canMatchGuard]
    }
];
