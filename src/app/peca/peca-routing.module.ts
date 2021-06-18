import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PecaFormComponent } from './peca-form/peca-form.component';

const routes: Routes = [
  { path: 'peca-form', component: PecaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PecaRoutingModule { }
