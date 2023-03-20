import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { FeatureWalletOverviewComponent } from './feature-wallet-overview.component';
import { FeatureWalletOverviewRoutingModule } from './feature-wallet-overview-routing.module';

@NgModule({
  declarations: [FeatureWalletOverviewComponent],
  imports: [
    CommonModule,
    FeatureWalletOverviewRoutingModule,
    IonicModule.forRoot(),
  ],
})
export class FeatureWalletOverviewModule {}
