import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonGridComponent } from './common-grid.component';

const routes: Routes = [{ path: '', component: CommonGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonGridRoutingModule { }
