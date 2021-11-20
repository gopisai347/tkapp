import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwipeprofilesPage } from './swipeprofiles.page';

const routes: Routes = [
  {
    path: '',
    component: SwipeprofilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwipeprofilesPageRoutingModule {}
