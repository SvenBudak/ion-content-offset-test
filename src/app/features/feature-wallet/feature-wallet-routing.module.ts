import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureWalletComponent } from './feature-wallet.component';

const routes: Routes = [
  { 
    path: '',
    component: FeatureWalletComponent,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./feature-wallet-overview/feature-wallet-overview.module').then((m) => m.FeatureWalletOverviewModule)
      },
      { 
        path: '**', redirectTo: 'overview'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureWalletRoutingModule {}
