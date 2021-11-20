import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardonePageRoutingModule } from './guardone-routing.module';

import { GuardonePage } from './guardone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardonePageRoutingModule
  ],
  declarations: [GuardonePage]
})
export class GuardonePageModule {}
