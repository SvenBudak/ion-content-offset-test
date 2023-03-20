import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureWalletOverviewComponent } from './feature-wallet-overview.component';

const routes: Routes = [{ path: '', component: FeatureWalletOverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureWalletOverviewRoutingModule { }
