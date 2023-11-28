import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroDeUsuarioComponent } from './cadastro-de-usuario/cadastro-de-usuario.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cadastro-de-usuario', component: CadastroDeUsuarioComponent }
];
