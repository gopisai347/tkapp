import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificationsuccesPage } from './verificationsucces.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationsuccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationsuccesPageRoutingModule {}
