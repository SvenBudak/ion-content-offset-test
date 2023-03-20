import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Ionic 6.2 Angular ' + VERSION.major;

  constructor() {}

  ionViewDidEnter() {}
}
