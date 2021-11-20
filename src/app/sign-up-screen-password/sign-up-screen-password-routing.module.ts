import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpScreenPasswordPage } from './sign-up-screen-password.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpScreenPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpScreenPasswordPageRoutingModule {}
