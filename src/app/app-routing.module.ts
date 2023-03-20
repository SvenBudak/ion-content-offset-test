import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wallet',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'wallet',
        loadChildren: () =>
          import('./features/feature-wallet/feature-wallet.module').then(
            (m) => m.FeatureWalletModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'wallet' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
