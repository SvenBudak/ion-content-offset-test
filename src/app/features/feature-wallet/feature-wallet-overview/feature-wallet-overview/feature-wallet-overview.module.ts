import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { FeatureWalletOverviewComponent } from './feature-wallet-overview.component';
import { FeatureWalletOverviewRoutingModule } from './feature-wallet-overview-routing.module';

@NgModule({
  declarations: [FeatureWalletOverviewComponent],
  imports: [CommonModule, FeatureWalletOverviewRoutingModule, SharedModule],
})
export class FeatureWalletOverviewModule {}
