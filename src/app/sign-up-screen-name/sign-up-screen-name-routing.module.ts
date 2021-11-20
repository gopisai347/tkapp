import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpScreenNamePage } from './sign-up-screen-name.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpScreenNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpScreenNamePageRoutingModule {}
