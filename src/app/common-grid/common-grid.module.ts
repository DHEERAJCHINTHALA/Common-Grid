import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonGridRoutingModule } from './common-grid-routing.module';
import { CommonGridComponent } from './common-grid.component';


@NgModule({
  declarations: [
    CommonGridComponent
  ],
  imports: [
    CommonModule,
    CommonGridRoutingModule
  ],
  exports:[CommonGridComponent]
})
export class CommonGridModule { }
