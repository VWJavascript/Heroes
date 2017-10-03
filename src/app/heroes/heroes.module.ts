import { NgModule } from '@angular/core';
// Modulo para importa o NgModel que é usado no two way data buind nos formularios
import { FormsModule }   from '@angular/forms';
// Modulo para utilizar as diretivas ngIf, ngFor e etc...
import { BrowserModule } from '@angular/platform-browser';
// Modulo para poder usar as rotas
import { AppRoutingModule } from '../app-routing.module';
// Modulo para fazer requisições HTTP
import { HttpModule } from '@angular/http';

// Importes para rodar e configurar uma web API em memória, bom para fazer testes
// Execute: npm install angular-in-memory-web-api --save
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './heroes.mock';

// Componentes devem ser declarado no modulo antes de outros componente o utilizarem.
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroesComponent } from './list/heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './search/hero-search.component';

// Modulo dos herois
@NgModule({

  // AppComponent utiliza/importa esses modulos (BrowserModule e FormsModule)
  // Ao invés de exigir um servidor de API real, iremos simular a comunicação com o servidor remoto, adicionando o
  // InMemoryWebApiModule às importações do módulo, efetivamente substituindo o serviço de backend do XHR do cliente
  // Http por uma alternativa na memória.
  // O método de configuração forRoot() leva uma classe InMemoryDataService que inicia o banco de dados na memória.
  // Adicione o arquivo in-memory-data.service.ts no modulo de heroes.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],

  // Todos os componentes devem ser declarados em um, e somente um modulo (NgModule)
  // O array declarations contem uma lista de componentes, pipes e diretivas que pertencem a esse modulo.
  // Quando um modulo qualquer importa esse modulo, ele pode utilizar desses componentes, diretivas e pipes
  declarations: [
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],

  // Disponibiliza o HeroService para os modulos que importar esse modulo
  // Ensina ao injetor como criar um HeroService
  // O array providers diz ao angular para criar uma instancia
  // do HeroService quando for criado um component
  providers: [HeroService],
})
export class HeroesModule { }
