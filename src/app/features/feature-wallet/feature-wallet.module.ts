import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FeatureWalletComponent } from './feature-wallet.component';
import { FeatureWalletRoutingModule } from './feature-wallet-routing.module';

@NgModule({
  declarations: [FeatureWalletComponent],
  imports: [CommonModule, FeatureWalletRoutingModule, SharedModule],
})
export class FeatureWalletModule {}
