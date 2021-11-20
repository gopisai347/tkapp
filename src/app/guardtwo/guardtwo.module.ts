import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardtwoPageRoutingModule } from './guardtwo-routing.module';

import { GuardtwoPage } from './guardtwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardtwoPageRoutingModule
  ],
  declarations: [GuardtwoPage]
})
export class GuardtwoPageModule {}
