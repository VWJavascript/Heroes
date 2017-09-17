import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

// Lista de rotas
// path: Caminho da rota definida na url do navegador
// component: Componente que será criado ao navegar na rota especificada em path
// redirectTo: Rota na qual será redirecionada caso entre com a rota ''
// pathMatch: 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  // O método forRoot() é chamado porque um roteador configurado é fornecido na raiz do aplicativo.
  // O método forRoot() fornece os provedores de serviços do Roteador e as diretrizes necessárias
  // para o roteamento e executa a navegação inicial com base no URL atual do navegador.
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
