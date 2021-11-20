import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwipeprofilesPageRoutingModule } from './swipeprofiles-routing.module';

import { SwipeprofilesPage } from './swipeprofiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipeprofilesPageRoutingModule
  ],
  declarations: [SwipeprofilesPage]
})
export class SwipeprofilesPageModule {}
