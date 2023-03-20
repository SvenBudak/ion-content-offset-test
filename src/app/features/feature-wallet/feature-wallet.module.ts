import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { FeatureWalletComponent } from './feature-wallet.component';
import { FeatureWalletRoutingModule } from './feature-wallet-routing.module';

@NgModule({
  declarations: [FeatureWalletComponent],
  imports: [CommonModule, FeatureWalletRoutingModule, IonicModule.forRoot()],
})
export class FeatureWalletModule {}
