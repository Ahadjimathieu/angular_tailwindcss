import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoneRoutingModule } from './hone-routing.module';
import { HoneComponent } from './hone.component';


@NgModule({
  declarations: [
    HoneComponent
  ],
  imports: [
    CommonModule,
    HoneRoutingModule
  ]
})
export class HoneModule { }
