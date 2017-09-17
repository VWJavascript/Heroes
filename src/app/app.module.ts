import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulo para importa o NgModel que é usado no two way data buind nos formularios
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Componentes devem ser declarado no modulo antes de outros componente o utilizarem.
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component'

// Modulo principal, não é importado
@NgModule({

  // AppComponent utiliza/importa esses modulos (BrowserModule e FormsModule)
  // logo todos os componentes dentro desses modulos podem ser utilizados no AppComponent
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  // Todos os componentes devem ser declarados em um, e somente um modulo (NgModule)
  // O array declarations contem uma lista de componentes, pipes e diretivas que pertencem a esse modulo.
  // Quando um modulo qualquer importa esse modulo, ele pode utilizar desses componentes, diretivas e pipes
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],

  // Disponibiliza o HeroService para os modulos que importar esse modulo
  // Ensina ao injetor como criar um HeroService
  // O array providers diz ao angular para criar uma instancia
  // do HeroService quando for criado um component
  providers: [HeroService],

  bootstrap: [AppComponent]
})
export class AppModule { }
