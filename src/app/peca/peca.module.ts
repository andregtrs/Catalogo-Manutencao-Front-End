import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PecaRoutingModule } from './peca-routing.module';
import { PecaFormComponent } from './peca-form/peca-form.component';


@NgModule({
  declarations: [
    PecaFormComponent
  ],
  imports: [
    CommonModule,
    PecaRoutingModule
  ],
  exports: [
    PecaFormComponent
  ]
  
})
export class PecaModule { }
