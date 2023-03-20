import { Component } from '@angular/core';

import { LifecycleService } from '../../services/lifecycle.service';

@Component({
  selector: 'anime-chat-feature-wallet',
  templateUrl: './feature-wallet.component.html',
  styleUrls: ['./feature-wallet.component.scss'],
})
export class FeatureWalletComponent {
  constructor(private lifecycleService: LifecycleService) {}

  ionViewDidEnter() {
    this.lifecycleService.viewDidEnter$.next();
  }

  ionViewDidLeave() {
    this.lifecycleService.viewDidLeave$.next();
  }
}
