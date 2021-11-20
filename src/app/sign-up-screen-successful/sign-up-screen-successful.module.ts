import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpScreenSuccessfulPageRoutingModule } from './sign-up-screen-successful-routing.module';

import { SignUpScreenSuccessfulPage } from './sign-up-screen-successful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpScreenSuccessfulPageRoutingModule
  ],
  declarations: [SignUpScreenSuccessfulPage]
})
export class SignUpScreenSuccessfulPageModule {}
