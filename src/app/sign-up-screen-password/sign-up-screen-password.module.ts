import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpScreenPasswordPageRoutingModule } from './sign-up-screen-password-routing.module';

import { SignUpScreenPasswordPage } from './sign-up-screen-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpScreenPasswordPageRoutingModule
  ],
  declarations: [SignUpScreenPasswordPage]
})
export class SignUpScreenPasswordPageModule {}
