import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardthreePageRoutingModule } from './guardthree-routing.module';

import { GuardthreePage } from './guardthree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardthreePageRoutingModule
  ],
  declarations: [GuardthreePage]
})
export class GuardthreePageModule {}
