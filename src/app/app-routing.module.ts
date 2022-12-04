import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdocaoComponent } from './components/adocao/adocao.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroPetComponent } from './components/cadastro-pet/cadastro-pet.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'adocao', component: AdocaoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-usuario', component: CadastroComponent},
  {path: 'cadastro-pet', component: CadastroPetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
