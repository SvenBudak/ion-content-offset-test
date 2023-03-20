import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeatureWalletOverviewComponent } from './feature-wallet-overview.component';
import { FeatureWalletOverviewRoutingModule } from './feature-wallet-overview-routing.module';

@NgModule({
  declarations: [FeatureWalletOverviewComponent],
  imports: [CommonModule, FeatureWalletOverviewRoutingModule],
})
export class FeatureWalletOverviewModule {}
