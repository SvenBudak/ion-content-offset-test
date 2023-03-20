import { Component } from '@angular/core';
import {
  TokenCollectionInterface,
  WalletsInterface,
} from '@animesector/common/interfaces';
import { WalletService } from '@animesector/common/services';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { TranslocoService } from '@ngneat/transloco';
import {
  from,
  lastValueFrom,
  Observable,
  ReplaySubject, switchMap,
  take
} from 'rxjs';

import { LifecycleService } from '../../../services/lifecycle.service';

@Component({
  selector: 'anime-chat-feature-wallet-overview',
  templateUrl: './feature-wallet-overview.component.html',
  styleUrls: ['./feature-wallet-overview.component.scss'],
})
export class FeatureWalletOverviewComponent {
  private refresh = new ReplaySubject<void>(1);
  public wallets$?: Observable<WalletsInterface[]>;

  constructor(
    private translocoService: TranslocoService,
    private actionSheetCtrl: ActionSheetController,
    private service: WalletService,
    private alertController: AlertController,
    private lifecycleService: LifecycleService
  ) {
    this.wallets$ = this.refresh
      .asObservable()
      .pipe(switchMap(() => from(this.service.getWallets()).pipe()));
  }

  ionViewWillEnter() {
    this.refresh.next();
  }

  trackById(index: number, wallet: WalletsInterface) {
    return wallet.id;
  }

  getCollectionClass(collection: TokenCollectionInterface) {
    const prefix = 'has-';
    const tokens = collection.tokens <= 4 ? collection.tokens : 4;
    return `${prefix}${tokens}`;
  }

  getAspectRatio(tokens: number, index: number) {
    if (tokens === 1) {
      return '1:1';
    } else if (tokens === 2) {
      return '1:2';
    } else if (tokens === 3) {
      if (index === 0) {
        return '1:2';
      } else {
        return '1:1';
      }
    } else {
      return '1:1';
    }
  }

  public async presentActionSheet(wallet: WalletsInterface) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: await lastValueFrom(
        this.translocoService
          .selectTranslate('feature.wallet.overview.edit.title', {
            wallet: wallet.name,
          })
          .pipe(take(1))
      ),
      // subHeader: await lastValueFrom(this.translocoService.selectTranslate('feature.wallet.overview.edit.description', { wallet: wallet.name }).pipe(take(1))),
      buttons: [
        {
          text: await lastValueFrom(
            this.translocoService
              .selectTranslate('feature.wallet.overview.edit.rename')
              .pipe(take(1))
          ),
          icon: 'create',
          handler: () => {
            console.log('Rename clicked');
          },
          data: {
            action: 'rename',
          },
        },
        {
          text: await lastValueFrom(
            this.translocoService
              .selectTranslate('feature.wallet.overview.edit.disconnect')
              .pipe(take(1))
          ),
          icon: 'trash',
          handler: () => {
            this.presentAlert(wallet);
          },
          data: {
            action: 'delete',
          },
        },
      ],
    });

    await actionSheet.present();

    return actionSheet.onDidDismiss();
  }

  private async presentAlert(wallet: WalletsInterface) {
    const alert = await this.alertController.create({
      header: await lastValueFrom(
        this.translocoService
          .selectTranslate('feature.wallet.overview.alert.text', {
            name: wallet.name,
          })
          .pipe(take(1))
      ),
      buttons: [
        {
          text: await lastValueFrom(
            this.translocoService.selectTranslate('common.cancel').pipe(take(1))
          ),
          role: 'cancel',
        },
        {
          text: await lastValueFrom(
            this.translocoService
              .selectTranslate('common.confirm')
              .pipe(take(1))
          ),
          role: 'confirm',
          handler: async () => {
            await this.service.deleteWallet(wallet.id);
            this.refresh.next();
          },
        },
      ],
    });

    await alert.present();

    return alert.onDidDismiss();
  }

  ionViewDidEnter() {
    this.lifecycleService.viewDidEnter$.next();
  }

  ionViewDidLeave() {
    this.lifecycleService.viewDidLeave$.next();
  }
}
