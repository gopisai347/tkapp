import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpScreenOTPPage } from './sign-up-screen-otp.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpScreenOTPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpScreenOTPPageRoutingModule {}
