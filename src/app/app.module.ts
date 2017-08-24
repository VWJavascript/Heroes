import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Module to import NgModel to get two way data buind in forms
import { FormsModule }   from '@angular/forms';

// A component must be declared in a module before other components can reference it.
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({

  // Used to import modules
  imports: [
    BrowserModule,
    FormsModule
  ],

  // Every component must be declared in one, and only one, NgModule.
  // Declarations array contains a list of application components, pipes, and directives that belong to the module.
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
