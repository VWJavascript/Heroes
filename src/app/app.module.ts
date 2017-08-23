import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Module to import NgModel to get two way data buind in forms
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
