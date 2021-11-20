import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationsuccesPageRoutingModule } from './verificationsucces-routing.module';

import { VerificationsuccesPage } from './verificationsucces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationsuccesPageRoutingModule
  ],
  declarations: [VerificationsuccesPage]
})
export class VerificationsuccesPageModule {}
