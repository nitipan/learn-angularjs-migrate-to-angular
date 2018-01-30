import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeModule, downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
import { PhoneService } from './core/phone.service';
import { HttpClientModule } from '@angular/common/http';
import { PhoneListComponent } from './phone-list/phone-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent

  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule
  ],
  entryComponents: [
    PhoneListComponent
  ],
  providers: [PhoneService]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}

// Making Angular Dependencies Injectable to AngularJS
angular.module('core.phone', [])
  .factory('Phone', downgradeInjectable(PhoneService));

angular.module('phoneList').directive('phoneList', downgradeComponent({ component: PhoneListComponent }) as angular.IDirectiveFactory);
