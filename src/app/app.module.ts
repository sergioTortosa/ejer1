import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModuloe } from './contador/contador/contador.modulo';


import { HeroresModule } from './heroes/heores.modulo';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroresModule,
    ContadorModuloe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
