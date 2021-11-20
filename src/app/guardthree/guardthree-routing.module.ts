import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardthreePage } from './guardthree.page';

const routes: Routes = [
  {
    path: '',
    component: GuardthreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardthreePageRoutingModule {}
