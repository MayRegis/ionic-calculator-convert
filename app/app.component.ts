import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { CalcPage } from '../pages/calc/calc';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CalcPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {

    });
  }
}
