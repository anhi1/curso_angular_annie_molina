import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
