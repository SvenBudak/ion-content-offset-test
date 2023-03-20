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
        path: 'connect',
        loadChildren: () => import('./feature-wallet-connect/feature-wallet-connect.module').then((m) => m.FeatureWalletConnectModule)
      },
      {
        path: 'confirm',
        loadChildren: () => import('./feature-wallet-confirm/feature-wallet-confirm.module').then((m) => m.FeatureWalletConfirmModule)
      },
      {
        path: ':walletId/collection',
        loadChildren: () => import('./feature-wallet-collection/feature-wallet-collection.module').then(m => m.FeatureWalletCollectionModule)
      },
      {
        path: ':walletId/collection/:collectionId/token',
        loadChildren: () => import('./feature-wallet-collection-detail/feature-wallet-collection-detail.module').then((m) => m.FeatureWalletCollectionDetailModule),
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
