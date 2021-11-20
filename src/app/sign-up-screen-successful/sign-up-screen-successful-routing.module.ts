import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpScreenSuccessfulPage } from './sign-up-screen-successful.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpScreenSuccessfulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpScreenSuccessfulPageRoutingModule {}
