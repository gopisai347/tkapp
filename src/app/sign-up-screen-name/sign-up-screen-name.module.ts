import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpScreenNamePageRoutingModule } from './sign-up-screen-name-routing.module';

import { SignUpScreenNamePage } from './sign-up-screen-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpScreenNamePageRoutingModule
  ],
  declarations: [SignUpScreenNamePage]
})
export class SignUpScreenNamePageModule {}
