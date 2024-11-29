import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CommonGridComponent } from './common-grid/common-grid.component';
import { CommonGridModule } from './common-grid/common-grid.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CommonGridModule,
    AppRoutingModule
  ],

  providers: [
    provideClientHydration()
  ],
 
 
  bootstrap: [AppComponent]
})
export class AppModule { }
