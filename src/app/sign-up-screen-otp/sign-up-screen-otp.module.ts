import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpScreenOTPPageRoutingModule } from './sign-up-screen-otp-routing.module';

import { SignUpScreenOTPPage } from './sign-up-screen-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpScreenOTPPageRoutingModule
  ],
  declarations: [SignUpScreenOTPPage]
})
export class SignUpScreenOTPPageModule {}
