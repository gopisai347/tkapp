import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardonePage } from './guardone.page';

const routes: Routes = [
  {
    path: '',
    component: GuardonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardonePageRoutingModule {}
