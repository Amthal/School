import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NamedPage } from './named';

@NgModule({
  declarations: [
    NamedPage,
  ],
  imports: [
    IonicPageModule.forChild(NamedPage),
  ],
})
export class NamedPageModule {}
