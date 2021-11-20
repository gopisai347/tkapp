import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpScreenEmailPageRoutingModule } from './sign-up-screen-email-routing.module';

import { SignUpScreenEmailPage } from './sign-up-screen-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpScreenEmailPageRoutingModule
  ],
  declarations: [SignUpScreenEmailPage]
})
export class SignUpScreenEmailPageModule {}
