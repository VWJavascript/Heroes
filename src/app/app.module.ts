import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulo para importa o NgModel que é usado no two way data buind nos formularios
import { FormsModule }   from '@angular/forms';

// Um componente deve ser declarado no modulo antes de outros componente o utilizarem.
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({

  // AppComponent utiliza/importa esses modulos (BrowserModule e FormsModule)
  // logo todos os componentes dentro desses modulos podem ser utilizados no AppComponent
  imports: [
    BrowserModule,
    FormsModule
  ],

  // Todos os componentes devem ser declarados em um, e somente um modulo (NgModule)
  // O array declarations contem uma lista de componentes, pipes e diretivas que pertencem a esse modulo.
  // Quando um modulo qualquer importa esse modulo, ele pode utilizar desses componentes, diretivas e pipes
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
