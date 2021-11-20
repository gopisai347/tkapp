import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardtwoPage } from './guardtwo.page';

const routes: Routes = [
  {
    path: '',
    component: GuardtwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardtwoPageRoutingModule {}
