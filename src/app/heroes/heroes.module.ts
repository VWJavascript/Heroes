import { NgModule } from '@angular/core';
// Modulo para importa o NgModel que é usado no two way data buind nos formularios
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

// Componentes devem ser declarado no modulo antes de outros componente o utilizarem.
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroesComponent } from './list/heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component'

// Modulo dos herois
@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],

  // Todos os componentes devem ser declarados em um, e somente um modulo (NgModule)
  // O array declarations contem uma lista de componentes, pipes e diretivas que pertencem a esse modulo.
  // Quando um modulo qualquer importa esse modulo, ele pode utilizar desses componentes, diretivas e pipes
  declarations: [
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],

  // Disponibiliza o HeroService para os modulos que importar esse modulo
  // Ensina ao injetor como criar um HeroService
  // O array providers diz ao angular para criar uma instancia
  // do HeroService quando for criado um component
  providers: [HeroService],
})
export class HeroesModule { }
