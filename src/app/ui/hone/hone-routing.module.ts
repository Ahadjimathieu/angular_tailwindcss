import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoneComponent } from './hone.component';

const routes: Routes = [{ path: '', component: HoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoneRoutingModule { }
